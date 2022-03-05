
import './App.css';
import React, {useState} from "react";


function App() {

  
  const [userData, setUserData] = useState([]);
   
  const fetchData = async function() {
    const url = "https://reqres.in/api/users?page=1";
    const response = await fetch(url);
    const data = await response.json();
    setUserData(data.data);
};

  return (
    <div>
    <div className="App">
     
     <h2 className="logo">Task 2</h2>
     <button onClick ={fetchData} className="navButton">Get Users</button>
     </div>
     
     <h1 id="containerHeading">Click the <i>Get User button</i> to get the data</h1>

     <div className="container">
     {userData.map(function(user){
        return(
          <div className="card">
            <img src={user.avatar} key = {user.avatar} className="image" alt="logo512.png" />
            <h3 className="userName" key ={user.first_name}  >{user.first_name} {user.last_name}</h3>
            <p1> User id: {user.id}</p1>
            <p className="mailId" key = {user.email} >{user.email}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default App;
