import React from 'react'

class App extends React.Component{
  render(props){
    if(props){
    return(
      <React.Fragment>
      <h3> Name : {props.name?props.name:"Steve"}</h3>
      <h3> Preferrd Cities : {props.cities?props.cities:["Bangalore","Chennai"]}</h3>
      <h3> Age : {props.age?props.age:"21"}</h3>
    </React.Fragment>
    )
   }
  }
}

export default App