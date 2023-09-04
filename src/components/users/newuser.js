import React, { useEffect, useState } from "react";
function UserFunctional() {
    const [counter, setCounter] = useState(10)
    const [isAuth,setAuth]=useState(true)
    const [users, setUsers] = useState([
        {email:"user1@gmail.com",name:"user1",isActive:true},
        {email:"user2@gmail.com",name:"user2",isActive:false},
        {email:"user3@gmail.com",name:"user3",isActive:true},
        {email:"user4@gmail.com",name:"user4",isActive:false},
        {email:"user5@gmail.com",name:"user5",isActive:true}
    ])
    const toggleAuth = () => {
        setAuth(!isAuth)
    }
    const changeUser = () => {
        changeUser()
    }
    const chng=()=>{
        setCounter(20)
    }
    useEffect(() => {
        console.log("Mounting");
        return () => {
            console.log("Unmounting");
        }
    }, []);
    useEffect(() => {
        console.log("Updating");
    }, [isAuth,counter]);
    return (<>
        <input placeholder="Enter User Mail"/>
        <input placeholder="Enter User Name"/>
        <ul>
        {isAuth ?
            users.map((user, i) => {
                return (<li key={i}>Hello {user.name}</li>);
            })
        : <h1>Login First</h1>
        }
        </ul>
        <button onClick={chng}>change val</button>
        <button onClick={changeUser}>change user info</button>
        <button onClick={toggleAuth}>Toggle Auth</button>
    </>);
}

export default UserFunctional;