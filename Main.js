import React from 'react'
import Appp from './Appp'

class Main extends React.Component{
  render(){

    return(
      <Appp name="Akash"
         cities={["Bangalore","Pune"]}      
         Age="21"
      />
    )
  }
}

export default Main