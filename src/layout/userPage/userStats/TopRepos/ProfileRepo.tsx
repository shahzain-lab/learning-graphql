import { UserNode, Languages } from "../../../../types/repositories.types"
// date formater
import moment from 'moment';
import { ProfileProps } from "../../../../types/appProps.types";



const ProfileRepo: React.FC<ProfileProps> = ({ node }) => {
    return (
        <div
            className="pinned__item"
        >
            <div className="pinned__item--header">
                <h3 className="pinned__text--primary"><a href={node.url} target="_blank">{node.name}</a></h3>
                <h3 className="pinned__text--secondary">{moment(node.updatedAt).format('LL')}</h3>
            </div>
            <h4 className="pinned__text--paragraph">{node.description}</h4>
            <div className="pinned__item--stats">
                {node.languages?.edges?.map(({ node }: UserNode<Languages>) => (

                    <div className="pinned__item--language" key={node.name}>
                        <p style={{ width: '1.3rem', marginRight: '.3rem', borderRadius: '50%', backgroundColor: `${node.color}` }}></p>
                        <h3>{node.name}</h3>
                    </div>
                ))}
            </div>
            <div className="pinned__item--counts"></div>
        </div>
    )
}

export default ProfileRepo;
