import React, { Component } from "react"
import Items from "./Items"


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
        const randomImg = [
            './img/apple.png',
            './img/burger.jpeg',
            // './img/carrot.jpeg',
            './img/donut.jpeg',
            './img/fries.png',
            './img/oreo.jpeg',
            './img/pie.png',
            './img/queso.jpeg',
            './img/rice.jpeg',
            './img/salad.jpeg',
            './img/sketti.jpeg',
            './img/taco.png',
            './img/tomato.jpeg',
            './img/turkey.gif',
            './img/watermelon.jpg',
        ]
        return (

            <div>

                <h4 className='border border-top p-3'>Breakfast</h4>
                <div className='row row-cols-md-3 row-cols-sm-1'>
                    {randomImg.slice(0,9).map((item,index) => <Items uri={'1/9'} src={item} key={index}/>)}
                </div>
                <h4 className='border border-top p-3'>Drinks</h4>
                <div className='row row-cols-md-3 row-cols-sm-1'>
                    {/* <div className='row row-cols-3'> */}
                    {randomImg.slice(0,6).map((item,index) => <Items uri={'8/6'} src={item} key={index}/>)}

                    {/* <Items uri={'8/6'} src='./img/salad.jpeg' />
                    <Items uri={'8/6'} src='./img/sketti.jpeg' />
                    <Items uri={'8/6'} src='./img/taco.png' />
                    <Items uri={'8/6'} src='./img/tomato.jpeg' />
                    <Items uri={'8/6'} src='./img/turkey.gif' />
                    <Items uri={'8/6'} src='./img/watermelon.jpeg' /> */}
                    {/* </div> */}
                </div>
            </div>




        )
    }
}

export default Section;