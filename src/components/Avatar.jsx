export default function Avatar({username, email, phoneNumber, onReservedAvatar}){
    return(
        <div style={{border: '1px solid black'}}>
            <h4>{username}</h4>
            <h5>{email}</h5>
            <h6>{phoneNumber}</h6>

            <button onClick={() => onReservedAvatar(username)}>Ready</button>
        </div>
    )
}