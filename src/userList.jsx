import axios from "axios"
import { useEffect, useState } from "react"


 const User = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data)) 
    },[])

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default User