import React, { handleChange } from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }

    componentDidMount(){
        var places = require('places.js');
        var placesAutocomplete = places({
            appId: 'plLOVX4P1KIW',
            apiKey: '3a8a36e476f178d04d7a6934eb5c3408',
            container: document.getElementById('address-input')
        });
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    
    render() {
        return (
          <div>        
            <form>
              <label>
                <input type="search" id="address-input" placeholder="Where are we going?" value={this.state.value} onChange={this.handleChange} />
              </label>
            </form>
          </div>
        );
    }
}

export default SearchBox;