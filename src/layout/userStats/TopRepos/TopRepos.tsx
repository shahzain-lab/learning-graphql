import { useQuery } from '@apollo/client';
import { useContext } from 'react';
import Error from '../../../components/Error/Error';
import Loading from '../../../components/Loading/Loading';
import { GlobalContext } from '../../../context/AppContext';
import { GET_USER_TOP_REPOS } from '../../../graphql/TopRepos.query';
import { ProfileRepository, UserNode } from '../../../types/repositories.types';
import ProfileRepo from './ProfileRepo';


const TopRepos = () => {
  const { state } = useContext(GlobalContext)

  const { loading, error, data } = useQuery(GET_USER_TOP_REPOS, {
    variables: { username: state.searchValue ? state.searchValue : 'shahzain-lab' }
  });

  if (loading) return <Loading />
  if (error) return <Error error={error} />

  return (
    <div className="pinned">
      <h3 className="pinned__repo--text">Top Repositories:</h3>
      <div className="pinned__box">
        {data?.user?.topRepositories?.edges.map(({ node }: UserNode<ProfileRepository>) => (
          <ProfileRepo
            key={node.id}
            node={node}
          />
        ))}
      </div>
    </div>
  )
}

export default TopRepos;
