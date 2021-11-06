// apollo/client
import { useQuery } from '@apollo/client';
// date formater
import moment from 'moment';
// react
import { useContext } from 'react';
// components
import Error from '../../../components/Error/Error';
import Loading from '../../../components/Loading/Loading';
import { GlobalContext } from '../../../context/AppContext';
import { GET_USER_PROFILE_DETAIL } from '../../../graphql/Profile.query';


const UserDetail = () => {
  const { state } = useContext(GlobalContext)

  const { loading, error, data } = useQuery(GET_USER_PROFILE_DETAIL, {
    variables: { username: state.searchValue ? state.searchValue : 'shahzain-lab' }
  });

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  const { user } = data;

  return (
    <div className="user-details">
      <img
        className="user--img"
        src={user?.avatarUrl}
        alt={user?.name}
      />

      <div className="user__text--info">
        <h2 className="user__text--primary">{user?.name}</h2>
        <h3 className="user__text--secondary">{user?.bio}</h3>

      </div>
      <div className="user__action--info">
        <h4 className="user__text--tertiary">{user?.followers.totalCount} followers</h4>
        <h4 className="user__text--tertiary">{user?.following?.totalCount} following</h4>
      </div>
      <h3 className="user__text--date">
        Created At:
        <span> {moment(user?.createdAt).format('LL')}
        </span></h3>
    </div>
  )
}

export default UserDetail
