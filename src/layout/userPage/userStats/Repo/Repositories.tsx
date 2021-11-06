import { useQuery } from '@apollo/client';

import { useContext } from 'react';
import Error from '../../../../components/Error/Error';
import Loading, { LoadingTask } from '../../../../components/Loading/Loading';
import { GlobalContext } from '../../../../context/AppContext';
import { UserNode, UserRepositories } from '../../../../types/repositories.types';
import {
  GET_USER_REPOS,
} from '../../../../graphql/Repositories';
import Repository from './UserRepository';

const Repositories = () => {
  const { state } = useContext(GlobalContext);


  // useQuery
  const { loading, error, data, fetchMore } = useQuery(GET_USER_REPOS, {
    variables: {
      username: state.searchValue ? state.searchValue : 'shahzain-lab',
    },
    notifyOnNetworkStatusChange: true
  });

  const updateQuery = (previousResult: typeof data, { fetchMoreResult }: typeof data) => {
    if (!fetchMoreResult) {
      return previousResult;
    }
    return {
      ...previousResult,
      user: {
        ...previousResult.user,
        repositories: {
          ...previousResult.user.repositories,

          ...fetchMoreResult.user.repositories,
          edges: [
            ...previousResult.user.repositories.edges,
            ...fetchMoreResult.user.repositories.edges,
          ],
        },
      },
    };
  };

  if (loading && !data) return <Loading />
  if (error) return <Error error={error} />

  return (
    <div className="repos">
      {data?.user?.repositories?.edges.map(({ node }: UserNode<UserRepositories>) => (
        <Repository
          key={node.id}
          node={node}
        />
      ))}
      <div className="repos__fetchmore">
        {data?.user?.repositories?.pageInfo?.hasNextPage &&
          <button
            className="repos__fetch--btn"
            onClick={() => fetchMore({
              variables: { cursor: data?.user?.repositories?.pageInfo?.endCursor },
              updateQuery
            })}
          >{loading ? <LoadingTask /> : 'Fetch More'}</button>
        }
      </div>

    </div>
  )
}

export default Repositories
