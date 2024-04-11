import FriendsListItem from "./FriendsListItem";

const FriendsList = ({friends}) => {
 
  return (
   
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <FriendsListItem 
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              status={friend.isOnline}/>
            </li>
          );
        })}
      </ul>
   
  );
};

export default FriendsList;
