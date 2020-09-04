/* global google */
import React, { handleChange } from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }

    componentDidMount(){
      var options = {
        componentRestrictions: {country: 'au'}
      };
      const input = document.getElementById("pac-input");
      const autocomplete = new google.maps.places.Autocomplete(input, options);
      autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

        if (!place.geometry) {
          // User entered the name of a Place that was not suggested and
          // pressed the Enter key, or the Place Details request failed.
          window.alert("No details available for input: '" + place.name + "'");
          return;
        }
      });

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
            <div id="title">
              Autocomplete search by Algolia
            </div>
            <form>
              <label>
                <input type="search" id="address-input" placeholder="Where are we going?" value={this.state.value} onChange={this.handleChange} />
              </label>
            </form>
            <div id="title">
              Autocomplete search by Google
            </div>
            <input id="pac-input" type="text" placeholder="Enter a location" />
          </div>
          
        );
    }
}

export default SearchBox;