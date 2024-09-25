import Avatar from "./Avatar"

// function Profile({children}){
function Profile({avatars, onReversed}){
    console.log(avatars);
    return(
        <div>
            <h2>Profile</h2>
            {avatars.map((a) => (
                <Avatar
                    key={a.username}
                    username={a.username}
                    email={a.email}
                    phoneNumber={a.phoneNumber}
                    onReservedAvatar={onReversed}
                />
            ))}
            {/* {children} */}
        </div>
    )
}

export default Profile

export function Username(){
    return(
        <div>
            Username
        </div>
    )
}