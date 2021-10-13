import React, { Component } from "react"
//import 'bootstrap/dist/css/bootstrap.css';


const apiKey = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com"
const axios = require('axios');
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
    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }
    componentDidUpdate() {
        console.log('update component')
    }

    componentDidMount() {
        console.log('regulators mount up')
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

    //------------------View-----------------//
    render() {
        //console.log('render started')
        return (
            <div className='container'>
                <div className='row bg-danger'>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                </div>
                <div className='row bg-danger'>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                </div>
                <div className='row bg-danger'>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                    <div className="col-4 justify-content-center">
                        <div className="card justify-content center">
                            <p>Texts</p>
                            <p>{this.state.counter}</p>
                            <button className='btn btn-secondary' onClick={this.increment}>Increment</button>
                            <button onClick={this.decrement}>Decrement</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Section;