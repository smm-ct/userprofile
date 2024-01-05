import { useEffect, useState } from "react";
import { UserCard } from "../components/UserCard";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    
    const getUsers = () =>{
        setLoader(true);
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then((data) => {
            setUsers(data.users),
            setLoader(false);
        });
    }

    useEffect(() => {
        getUsers();
    },[]);

    console.log(users);

  return (
    <>
    {
        (loader) ? (
        <>
            <span className="loading loading-infinity loading-lg"></span>
        </>
        ) : (
            <>
            {
                users.map((user, i) =>(
                    <UserCard key={i} userInfo={user} />
                ))
            }
            </>
        )       
        
    }
    </>
  )
}
