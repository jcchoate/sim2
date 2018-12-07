import React, { Component } from 'react'
import Header from './Header';
import { HashRouter, Switch, Route, Link } from "react-router-dom"
import { updateImageUrl } from '../ducks/reducer';
import {connect} from 'react-redux'

class NewListing2 extends Component {
    render() {
        const {updateImageUrl}= this.props
        return (
            <div>
                <Header />
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <Link to="/basic">
                    <button>Previous</button>
                </Link>
                <Link to="/amount">
                    <button>Next</button>
                </Link>
                <input placeholder="Image URL" onChange={(e)=> updateImageUrl(e.target.value)} />
            </div>
        )
    }
}
function mapStateToProps(state){
    const {imageUrl} = state

    return{imageUrl}
}
export default connect( mapStateToProps, {updateImageUrl})(NewListing2)