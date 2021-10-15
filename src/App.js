import './App.css';
import Section from "./components/Section"
import './index.css';


function App() {
    return (
        <div className='container bg-danger'>
            <div className='row bg-danger text-center'>
                <h1 className="text-center">Christmas Coffee</h1>
                <a className='h6 text-decoration-none text-light fw-bold' href="https://www.google.com/maps/place/348+E+Main+St,+Lexington,+KY+40507/data=!4m2!3m1!1s0x884244e844532c33:0xb6919957af36b713?sa=X&ved=2ahUKEwj31OWSisjzAhWyRTABHc-_D_wQ8gF6BAgMEAE">
                    348 E Main St, Lexington, KY
                    </a>
                <h3>Menu</h3>
                <h6 className='text-center text-white'>******CHRISTMAS SPECIALS******</h6>
                <Section />
            </div>

            <footer className="d-flex flex-wrap align-items-center py-3 my-4 border-top justify-content-center">
                <div className='text-center'>
                    <h5 className="text-center">Christmas Coffee</h5>
                    <h6>Hours of Operation</h6>
                    <h6>Mon-Fri 5am to 1pm</h6>
                    <h6>Sat-Sun 5am to 2pm</h6>
                    <ul className="nav col justify-content-center list-unstyled d-flex">
                        <div className="template-demo">
                            <button type="button" className="btn btn-social-icon btn-facebook btn-rounded">
                                <i className="fa fa-facebook"></i>
                            </button>
                            <a href='https://www.youtube.com/results?search_query=christmas+songs'><button type="button"
                                className="btn btn-social-icon btn-youtube btn-rounded">
                                <i className="fa fa-youtube"></i>
                            </button>
                            </a>
                            <button
                                type="button" className="btn btn-social-icon btn-twitter btn-rounded">
                                <i className="fa fa-twitter">
                                </i>
                            </button>
                        </div>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default App;
