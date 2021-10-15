import React, { Component } from "react"
import axios from "axios"

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
        axios.get(apiKey + "/api/menu/type_amount/" + this.props.uri)
            .then(response => {
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

       //------------------View-----------------//
    render() {
        
        const foodName = this.state.menuData[0]?.name;
        const foodText = this.state.menuData[0]?.description;
        return (
            
            <div className="col-md-4 col-sm-12 py-2 justify-content-center">
                <div className="card card-body flex-column text-center p-3 mb-2 bg-success text-white h-100">
                    <img className="card-img-top" src={this.props.src} alt='food'/>
                    <br></br>
                    <p>Christmas {foodName}</p>
                    {/* {this.state.menuData[0]?.name} */}
                    <p>${Math.ceil(Math.random() * 25.32).toFixed(2)} Holiday Pricing</p>
                    <p>{foodText}</p>
                </div>
            </div>
        )
    }

}

export default Items;