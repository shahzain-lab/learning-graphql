import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import { useContext } from 'react';
import Error from '../../../../components/Error/Error';
import Loading from '../../../../components/Loading/Loading';
import { GlobalContext } from '../../../../context/AppContext';

const Repositories = () => {
    const { state } = useContext(GlobalContext)
    const GET_USER_REPOS = gql`
    query Repositories($username: String!){
        user(login: $username) {
          repositories(first: 17){
            edges {
              node {
                id
                name
                stargazerCount
                url
                updatedAt
                forkCount
                description
                createdAt
                isPrivate
              }
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
      
    `;
    const { loading, error, data } = useQuery(GET_USER_REPOS, {
        variables: { username: state.searchValue ? state.searchValue : 'shahzain-lab' }
    });
    if (loading) return <Loading />
    if (error) return <Error error={error} />
    console.log(data);

    return (
        <div className="repos">
            {data?.user?.repositories?.edges.map(({ node }: any) => (
                <div key={node.id} className="repo__contianer">
                    <div className="repo__header">
                        <div className="repo__header--content">
                            <a href={node.url} target="_blank">{node.name}</a>
                            <span className="repo__status">{node.isPrivate ? 'Private' : 'Public'}</span>
                        </div>
                        <div className="repo__header--star">
                            star {node.stargazerCount}
                        </div>
                    </div>
                    <p className="repo__description">{node.description}</p>
                    <div className="repo__counts">
                        <div className="repo__vote">
                            <span className="stars">{node.stargazerCount}</span>
                            <span className="fork">{node.forkCount}</span>
                            <span className="update">updated {moment(node.updatedAt).format('hh')} ago</span>
                        </div>
                        <span className="repo__updated">{moment(node.createdAt).format('LL')}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Repositories
