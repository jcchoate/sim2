import React, { Component } from 'react'
import Header from './Header';
import { HashRouter, Switch, Route, Link} from "react-router-dom"
import {connect} from 'react-redux'
import {updatePropertyName, updateAddress, updateCity, updateState, updateZip} from '../ducks/reducer'
class NewListing1 extends Component {
  render() {
      const {updatePropertyName, updateAddress, updateCity, updateState, updateZip} = this.props
    return (
      <div>
          <Header/>
          <Link to="/">
          <button>Cancel</button>
          </Link>
          <input placeholder="Property Name" onChange={(e)=> updatePropertyName(e.target.value)}/>
          <input placeholder="Address" onChange={(e)=> updateAddress(e.target.value)}/>
          <input placeholder="City" onChange={(e)=> updateCity(e.target.value)}/>
          <input placeholder="State" onChange={(e)=> updateState(e.target.value)}/>
          <input placeholder="Zip" onChange={(e)=> updateZip(e.target.value)}/>
          <Link to="/image">
          <button>Next</button>
          </Link>
          
      </div>
    )
  }
}
function mapStateToProps(state){
    const {propertyName, address, city, propertyState, zip} = state

    return{
        propertyName,
        address,
        city,
        propertyState,
        zip

    }
}
export default connect( mapStateToProps, {updatePropertyName,updateAddress,updateCity, updateState,updateZip})(NewListing1)