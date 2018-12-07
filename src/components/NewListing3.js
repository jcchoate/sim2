import React, { Component } from 'react'
import Header from './Header';
import { HashRouter, Switch, Route, Link} from "react-router-dom"
import {connect} from 'react-redux'
import {updateMortage, updateRent, addHome} from '../ducks/reducer'
import axios from 'axios'

class NewListing3 extends Component {
    constructor(props){
        super(props)


        this.state={
            newHome: []
        }
        this.addHome = this.addHome.bind(this)
    }
    addHome(){
        let {property_name,address,city,propertyState,zip,image_url,mortage,rent} = this.props
        console.log("props", this.props)
        axios.post('/homes', {
            property_name,
            address,
            city,
            state: propertyState,
            zip,
            image_url,
            mortage,
            rent
        })
        
      }

  render() {
    return (
      <div>
        <Header/>
        <Link to="/">
          <button>Cancel</button>
          </Link>
          <Link to="/amount">
          <button>Previous</button>
          </Link>
          <Link to="/">
          <button onClick={this.addHome}>Complete</button>
          </Link>
        <input placeholder="Monthly Mortgage Amount" onChange={(e)=> updateMortage(e.target.value)}/>
        <input placeholder="Desired Monthly Rent" onChange={(e)=> updateRent(e.target.value)}/>
      </div>
    )
  }
}
function mapStateToProps(state){
    const {property_name,address,city,propertyState,zip,image_url,mortage,rent} = state

    return{property_name,address,city,propertyState,zip,image_url,mortage,rent}
}
export default connect( mapStateToProps, {updateMortage, updateRent, addHome})(NewListing3)