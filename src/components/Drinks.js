import React, { Component } from "react"
import axios from "axios"

// const axios = require('axios');


// //------------Model----------//
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuData: {},
        }
    }

    componentDidUpdate() {
        // console.log('update component')
    }

    componentDidMount() {
        // console.log('regulators mount up')
        this.getAPI();
    }

    getAPI() {
        // Make a request for a user with a given ID
        const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
        //let this_ = this;
        axios.get(apiKey + "/api/menu/type_amount/8/6")
            .then(response =>  {
                this.setState({
                    menuData: response.data
                })
                //console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    
    //     //------------------View-----------------//
    render() {
        // console.log(props, 'props')
        const foodName = this.state.menuData[0]?.name;
        const foodText = this.state.menuData[0]?.description;
        return (
            // <div className='container'>
            //     <div className='row bg- danger justify-content-center'>
            <div className="col-4 d-flex align-items-stretch justify-content-center">
                <div className="card text-center p-3 mb-2 bg-success text-white">
                    <img src={this.props.src} alt='food'/>
                    <br></br>
                    <p>  {foodName}</p>
                    {/* {this.state.menuData[0]?.name} */}
                    <p>${Math.ceil(Math.random() * 25.32).toFixed(2)}</p>
                    <p>{foodText}</p>
                </div>
            </div>
        )
    }

}

export default Items;