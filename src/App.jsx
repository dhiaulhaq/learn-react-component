// import Profile, { Username as Nama } from "./components/Profile"
import { useState } from "react"
import Avatar from "./components/Avatar"
import Profile from "./components/Profile"
import avatars from "./data/avatar"
import { BASE_URL } from "./constants/baseUrl"

function App() {
  // BASE_URL
  const [data, setData] = useState(avatars)
  // console.log(data);
  
  function reversePhoneNumber(username){
    const foundAvatar = data.find(avatar => username === avatar.username)
    let splitNumber = foundAvatar.phoneNumber.split('').reverse().join('')

    let newData = data.map((el) => {
      if (el.username === username) {
        return {
          username: el.username,
          email: el.email,
          phoneNumber: splitNumber
        }
      }

      return {
        username: el.username,
        email: el.email,
        phoneNumber: el.phoneNumber
      }
    })

    setData(newData)
  }

  return (
    <>
      <h1>Home</h1>
      <Profile
        avatars={data} onReversed={reversePhoneNumber}
      />
      {/* <Profile>
        {data.map(avatar => (
          <Avatar
            key={avatar.username}
            username={avatar.username}
            email={avatar.email}
            phoneNumber={avatar.phoneNumber}
          />
        ))}
      </Profile> */}
      {/* <Nama/> */}
      {/* <Profile/> */}
      {/* <Profile/> */}
    </>
  )
}

export default App
