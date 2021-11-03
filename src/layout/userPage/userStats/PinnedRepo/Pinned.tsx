import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import Error from '../../../../components/Error/Error';
import Loading from '../../../../components/Loading/Loading';
import './style.css'


const Pinned = () => {
    const GET_USER_PIN_REPOS = gql`
    query getUser {
        user(login: "shahzain-lab") {
          pinnedItems(first: 10) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  forkCount
                  stargazerCount
                  url
                  updatedAt
                  languages(first: 1) {
                    edges {
                      node {
                        color
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;
    const { loading, error, data } = useQuery(GET_USER_PIN_REPOS);

    if (loading) return <Loading />
    if (error) return <Error error={error} />
    console.log(data);

    return (
        <div className="pinned">
            <h3 className="pinned__repo--text">Pinned:</h3>
            <div className="pinned__box">
                {data?.user?.pinnedItems?.edges.map(({ node }: any) => (
                    <div
                        className="pinned__item"
                        key={node.id}
                    >
                        <div className="pinned__item--header">
                            <h3 className="pinned__text--primary"><a href={node.url} target="_blank">{node.name}</a></h3>
                            <h3 className="pinned__text--secondary">{moment(node.updatedAt).format('LL')}</h3>
                        </div>
                        <h4 className="pinned__text--paragraph">{node.description}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pinned