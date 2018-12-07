import React, { Component } from 'react';
import axios from 'axios'
import Header from './Header'
import { HashRouter, Switch, Route, Link} from "react-router-dom"

class Home extends Component {
  constructor(){
    super()

    this.state={
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      image_url: "",
      mortage: "",
      rent: "",
      homes: []
    }
    // this.deleteFn = this.deleteFn.bind(this)
  }



  deleteFn(id){
    axios.delete (`/homes/${id}`).then((res)=>{this.setState({homes:res.data})})
}

  componentDidMount(){
    axios.get('/homes').then((res)=>{
    console.log("res",res.data)
    this.setState({
        homes:res.data
    })
})
}
  render() {
    let homes= this.state.homes
        let mappedHomes = (<h3>'No homes'</h3>)
        if (homes[0]) {
            mappedHomes = this.state.homes.map((home)=> {
                return (
                    <div>
                <img className="picture" src={home.image_url} alt="house"/>
                <p>{home.property_name}</p>
                <p>{home.address}</p>
                <p>{home.city}</p>
                <p>{home.state}</p>
                <p>{home.zip}</p>
                <p>{home.mortage}</p>
                <p>{home.rent}</p>
                <button onClick={(id)=>this.deleteFn(id)}>Delete</button>
                    </div>
                )
            })
        }
        
    return (
      <div className="App">
       <Header/>
       <h1>Dashboard</h1>
       <Link to="/basic">
       <button>Add New Property</button>
       </Link>
       {mappedHomes}
      </div>
    );
  }
}

export default Home;
