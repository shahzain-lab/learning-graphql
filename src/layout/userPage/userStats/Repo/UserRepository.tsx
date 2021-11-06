import { useMutation } from "@apollo/client";
import { ADD_STAR_TO_REPO, GET_USER_REPOS, REMOVE_STAR_FROM_REPO } from "../../../../graphql/Repositories";
// date formater
import moment from 'moment';
import { RepositoryProps } from "../../../../types/appProps.types";


const Repository: React.FC<RepositoryProps> = ({ node }) => {

    // updateStarHandler
    const [addStar] = useMutation(ADD_STAR_TO_REPO);
    const [removeStar] = useMutation(REMOVE_STAR_FROM_REPO);

    return (
        <div key={node.id} className="repo__contianer">
            <div className="repo__header">
                <div className="repo__header--content">
                    <a href={node.url} target="_blank">{node.name}</a>
                    <span className="repo__status">{node.isPrivate ? 'Private' : 'Public'}</span>
                </div>
                <div className="repo__header--star" onClick={() => {
                    node.viewerHasStarred ?
                        removeStar({
                            variables:
                                { starableid: node.id },
                            refetchQueries: [GET_USER_REPOS]
                        })
                        :
                        addStar({
                            variables:
                                { starableid: node.id },
                            refetchQueries: [GET_USER_REPOS]
                        })
                }}>
                    {
                        node.viewerHasStarred ?
                            <><i className="fas fa-star fa__updated--star"></i><span> unstar</span></>
                            :
                            <><i className="far fa-star fa__updated--star"></i><span> star</span></>
                    }
                </div>
            </div>
            <p className="repo__description">{node.description}</p>
            <div className="repo__counts">
                <div className="repo__vote">
                    <span className="stars"><i className="fas fa-star"></i>{node.stargazerCount}</span>
                    <span className="fork"><i className="fas fa-code-branch"></i>{node.forkCount}</span>
                    <span className="update">updated at {moment(node.updatedAt).format('LL')}</span>
                </div>
                <span className="repo__updated">created at:<span> {moment(node.createdAt).format('LL')}</span></span>
            </div>
        </div>
    )
}

export default Repository;
