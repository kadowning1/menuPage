//import logo from './logo.svg';
import './App.css';
import Section from "./components/Section"
//import axios from "axios"
import './index.css';


function App() {
    return (
        <div className='container bg-danger'>
            <div className='row bg-danger text-center'>
                <h1 className="text-center">Christmas Coffee</h1>
                <a href="https://www.google.com/maps/place/348+E+Main+St,+Lexington,+KY+40507/data=!4m2!3m1!1s0x884244e844532c33:0xb6919957af36b713?sa=X&ved=2ahUKEwj31OWSisjzAhWyRTABHc-_D_wQ8gF6BAgMEAE">
                    <h6 className="text-light" id='link'><b>348 E Main St, Lexington, KY</b></h6>
                </a>
                <h3>Menu</h3>
                <Section />
            </div>

            <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top justify-content-center">
                <div className='text-center'>
                    <h5 className="text-center">Christmas Coffee</h5>
                    <h6>Hours of Operation</h6>
                    <h6>Mon-Fri 5am to 1pm</h6>
                    <h6>Sat-Sun 5am to 2pm</h6>
                    {/* <div id='map'></div> */}
                    {/* <div id="googleMap"></div> */}
                    {/* <iframe title='unique'>
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211413038312!2d-84.49472698467461!3d38.042159979711656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1634155759285!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                                </iframe> */}
                    <ul className="nav col justify-content-center list-unstyled d-flex">
                        <div className="template-demo"> <button type="button" className="btn btn-social-icon btn-facebook btn-rounded"><i
                            className="fa fa-facebook"></i></button> <button type="button"
                                className="btn btn-social-icon btn-youtube btn-rounded"><i className="fa fa-youtube"></i></button> <button
                                    type="button" className="btn btn-social-icon btn-twitter btn-rounded"><i
                                        className="fa fa-twitter"></i></button>
                        </div>
                    </ul>
                </div>
            </footer>
        </div>


    );
}

// function myMap() {
//     var mapProp = {
//         center: new google.maps.LatLng(51.508742, -0.120850),
//         zoom: 5,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// }

// function initMap() {
//   // [START maps_add_map_instantiate_map]
//   // The location of Uluru
//   const uluru = { lat: -25.344, lng: 131.036 };
//   // The map, centered at Uluru
//   const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 4,
//     center: uluru,
//   });
//   // [END maps_add_map_instantiate_map]
//   // [START maps_add_map_instantiate_marker]
//   // The marker, positioned at Uluru
//   const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });
//   // [END maps_add_map_instantiate_marker]
// }

export default App;
