const FriendsListItem = ({id, avatar, name, status}) => {
  return (
    <div key={id}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{status}</p>
    </div>
  );
};

export default FriendsListItem