//items
//model
//controller
//view - show item name, description and image


import React, { Component } from "react"

const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
const axios = require('axios');


// //------------Model----------//
class Items extends Component {
    // constructor(props) {
    //     super(props)
    // }

    //     //-------------Controller--------//
    //     increment = () => {
    //         this.setState({ counter: this.state.counter + 1 });
    //     }
    //     decrement = () => {
    //         this.setState({ counter: this.state.counter - 1 });
    //     }
    componentDidUpdate() {
        // console.log('update component')
    }

    componentDidMount() {
        // console.log('regulators mount up')
        this.getAPI();
    }

    getAPI() {
        // Make a request for a user with a given ID
        axios.get(apiKey + "/api/menu/sections")
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    //     //------------------View-----------------//
    render() {
        // console.log('render started')
        return (
            // <div className='container'>
            //     <div className='row bg- danger justify-content-center'>
            <div className="col-4 justify-content-center">
                <div className="card text-center p-3 mb-2 bg-success text-white">
                    <p>Image of Item</p>
                    <p>Name of Item</p>
                    <p>Price</p>
                    <p>Description</p>
                    {/* <p>{this.state.counter}</p> */}
                    {/* <button className='btn btn-secondary'onClick={this.increment}>Increment</button> */}
                    {/* <button onClick={this.decrement}>Decrement</button> */}
                </div>
            </div>
            //     </div>
            // </div>

        )
    }

}

// this.props.items.map((item, i) => {
//     return 
//     <Items/>
// }

export default Items;