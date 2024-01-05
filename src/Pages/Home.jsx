import { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard";

export default function Home() {
    const [users, setUsers] = useState([]);
    
    const getUsers = () =>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => setUsers(data.users));
    }

    useEffect(() => {
        getUsers();
    },[]);

    console.log(users);

  return (
    <>
    {
        users.map((user, i) =>(
            <UserCard key={i} userInfo={user} />
        ))
    }
    </>
  )
}
