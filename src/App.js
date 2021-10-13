//import logo from './logo.svg';
import './App.css';
import Section from "./components/Section"



function App() {
    return (
        <div className='container bg-danger'>
            <div className='row bg-danger text-center'>
                <h1 className="text-center">Coffee4Dayz</h1>
                <h5 href="https://www.google.com/maps/place/348+E+Main+St,+Lexington,+KY+40507/data=!4m2!3m1!1s0x884244e844532c33:0xb6919957af36b713?sa=X&ved=2ahUKEwj31OWSisjzAhWyRTABHc-_D_wQ8gF6BAgMEAE">348 E Main St, Lexington, KY.</h5>
                <h6>Hours of Operation</h6>
                <h6>Mon-Fri 5am to 1pm</h6>
                <h6>Sat-Sun 5am to 2pm</h6>
                <Section />
            </div>
            
                <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top justify-content-center">
                    <div>
                        <h6 className="text-center">Coffee4Dayz</h6>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211413038312!2d-84.49472698467461!3d38.042159979711656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1634155759285!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
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

export default App;
