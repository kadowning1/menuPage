const axios = require('axios');
const apiKey = https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/items/42

class Section extends Component {
    constructor(props) {
        super(props)
    }
}

componentDidUpdate()
{
    console.log('update component')
}

componentDidMount()
{
    console.log('regulators mount up')
}

// Make a request for a user with a given ID
axios.get(apiKey)
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

render()
{
    console.log('render started')
}