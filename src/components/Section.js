import React, { Component } from "react"
import Items from "./Items"
//import 'bootstrap/dist/css/bootstrap.css';


// const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
// const axios = require('axios');
// import axios from 'axios'

//------------Model----------//
class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }

    //-------------Controller--------//
    // increment = () => {
    //     this.setState({ counter: this.state.counter + 1 });
    // }
    // decrement = () => {
    //     this.setState({ counter: this.state.counter - 1 });
    // }
    componentDidUpdate() {
        // console.log('update component')
    }

    componentDidMount() {
        // console.log('regulators mount up')
        // this.getAPI();
    }


    //------------------View-----------------//
    render() {
        //console.log('render started')
        return (

            <div className='col'>

                <h3>Breakfast</h3>
                <div className='row'>
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <h3>Drinks</h3>
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                    <Items />
                </div>
            </div>


        )
    }
}

export default Section;