import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Checkbox} from "@mui/material"
import { NumberLiteralType } from 'typescript';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };




// FUNCTIONAL REACT COMPONENT
function App() {
  // STATE
  const [isChecked, setIsCheck] = React.useState(false);
  const [userList, setUserList] = React.useState<any[]>([])
  // ONCLICK HANDLER
  const checkBoxHandler = () => {
    setIsCheck(!isChecked);


  }

  const gotGetUsersFromAPI =  () => {
    // makes a request to the server 
    // const userList = await fetch("http://someshit.com/api/users") //async
    const userList = [
      {
        id: 1,
        name: 'Jordan'
      },
      {
        id: 2,
        name: 'Peter'
      }
    ];
      setUserList(userList)
  
    }

  // RETURN 
  return (
    <div className="App">

      <header className="App-header">
      {
        isChecked ? (<div style={{ backgroundColor: "white"}}> something blah</div>) :null
      }
      {
        userList.length > 0 ? (
          userList.map(user => {
            return <div style={{ color: "white"}}>{`user_id: ${user.id} and user_name: ${user.name}`}</div>
          })
        ) : null
      }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} onClick={gotGetUsersFromAPI}/>
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
    </div>

      </header>
    </div>
  );
}

export default App;
