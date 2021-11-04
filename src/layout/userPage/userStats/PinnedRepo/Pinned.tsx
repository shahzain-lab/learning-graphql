import { gql, useQuery } from '@apollo/client';
import moment from 'moment';
import { useContext } from 'react';
import Error from '../../../../components/Error/Error';
import Loading from '../../../../components/Loading/Loading';
import { GlobalContext } from '../../../../context/AppContext';


const Pinned = () => {
  const { state } = useContext(GlobalContext)
  const GET_USER_PIN_REPOS = gql`
    query getUser($username: String!) {
      user(login: $username) {
        topRepositories(first: 8, orderBy: {field: UPDATED_AT, direction: DESC}) {
          edges {
            node {
              name
              description
              languages(first: 4) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                }
              }
              updatedAt
              id
              url
            }
          }
        }
      }

      }
    `;
  const { loading, error, data } = useQuery(GET_USER_PIN_REPOS, {
    variables: { username: state.searchValue ? state.searchValue : 'shahzain-lab' }
  });

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  return (
    <div className="pinned">
      <h3 className="pinned__repo--text">Top Repositories:</h3>
      <div className="pinned__box">
        {data?.user?.topRepositories?.edges.map(({ node }: any) => (
          <div
            className="pinned__item"
            key={node.id}
          >
            <div className="pinned__item--header">
              <h3 className="pinned__text--primary"><a href={node.url} target="_blank">{node.name}</a></h3>
              <h3 className="pinned__text--secondary">{moment(node.updatedAt).format('LL')}</h3>
            </div>
            <h4 className="pinned__text--paragraph">{node.description}</h4>
            <div className="pinned__item--stats">
              {node.languages?.edges?.map(({ node }: any) => (

                <div className="pinned__item--language" key={node.name}>
                  <p style={{ width: '1.3rem', marginRight: '.3rem', borderRadius: '50%', backgroundColor: `${node.color}` }}></p>
                  <h3>{node.name}</h3>
                </div>
              ))}
            </div>
            <div className="pinned__item--counts"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pinned
