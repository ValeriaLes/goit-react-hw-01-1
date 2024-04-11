import userData from './userData.json'
import friends from './friends.json'
import './App.css'
import Profile from './components/Profile'
import FriendsList from './components/FriendsList'



const App = () => {

  

  return (
    <>
      <Profile name={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats} />

      <FriendsList friends={friends}/>
    </>
  )
}

export default App
