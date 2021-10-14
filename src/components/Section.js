import React, { Component } from "react"
import Items from "./Items"
import Drinks from "./Drinks"
//import 'bootstrap/dist/css/bootstrap.css';


// const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
// const axios = require('axios');
// import axios from 'axios'

//------------Model----------//
class Section extends Component {
    // constructor(props) {
    //     super(props)


    // }

    //-------------Controller--------//
    componentDidUpdate() {
    }

    componentDidMount() {
    }

    //------------------View-----------------//
    render() {
        //console.log('render started')
        return (

            <div>

                <h4 className='border border-top p-3'>Breakfast</h4>
                <div className='row row-cols-3'>
                    <Items src='./img/apple.png' />
                    <Items src='./img/burger.jpeg' />
                    <Items src='./img/carrot.jpeg' />
                    <Items src='./img/donut.jpeg' />
                    <Items src='./img/fries.png' />
                    <Items src='./img/oreo.jpeg' />
                    <Items src='./img/pie.png' />
                    <Items src='./img/queso.jpeg' />
                    <Items src='./img/rice.jpeg' />
                </div>
                <h4 className='border border-top p-3'>Drinks</h4>
                <div className='row row-cols-3'>
                    {/* <div className='row row-cols-3'> */}

                    <Drinks src='./img/salad.jpeg' />
                    <Drinks src='./img/sketti.jpeg' />
                    <Drinks src='./img/taco.png' />
                    <Drinks src='./img/tomato.jpeg' />
                    <Drinks src='./img/turkey.gif' />
                    <Drinks src='./img/watermelon.jpeg' />
                    {/* </div> */}
                </div>
            </div>




        )
    }
}

export default Section;