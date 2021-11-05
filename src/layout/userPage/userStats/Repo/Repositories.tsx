import { gql, useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import { useContext } from 'react';
import Error from '../../../../components/Error/Error';
import Loading from '../../../../components/Loading/Loading';
import { GlobalContext } from '../../../../context/AppContext';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'


const Repositories = () => {
  const { state } = useContext(GlobalContext);

  const GET_USER_REPOS = gql`
    query Repositories($username: String!){
        user(login: $username) {
          repositories(first: 17){
            edges {
              node {
                id
                name
                stargazerCount
                viewerHasStarred
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

  const ADD_STAR_TO_REPO = gql`
     mutation addStar($starableid: String!){
      addStar(input: {starrableId: $starableid}){
        starrable {
          stargazerCount
        }
      }
     }
    `;

  const REMOVE_STAR_FROM_REPO = gql`
     mutation remove($starableid: String!){
      removeStar(input: {starrableId: $starableid}) {
        starrable {
          stargazerCount
        }
      }
     }
    `;

  // useQuery
  const { loading, error, data } = useQuery(GET_USER_REPOS, {
    variables: { username: state.searchValue ? state.searchValue : 'shahzain-lab' }
  });

  // updateStarHandler
  const [addStar] = useMutation(ADD_STAR_TO_REPO);
  const [removeStar] = useMutation(REMOVE_STAR_FROM_REPO);

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <div className="repos">
      {data?.user?.repositories?.edges.map(({ node }: any) => (
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
                  <><AiOutlineStar /><span> unstar</span></>
                  :
                  <><AiOutlineStar /><span> star</span></>
              }
            </div>
          </div>
          <p className="repo__description">{node.description}</p>
          <div className="repo__counts">
            <div className="repo__vote">
              <span className="stars"><AiFillStar /><span>{node.stargazerCount}</span></span>
              <span className="fork"><BiGitRepoForked />{node.forkCount}</span>
              <span className="update">updated at {moment(node.updatedAt).format('LL')}</span>
            </div>
            <span className="repo__updated">created at:<span> {moment(node.createdAt).format('LL')}</span></span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Repositories
