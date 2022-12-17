import { Component } from "react";
import PropTypes from 'prop-types';


class Filter extends Component{
    onChangeInput = (e) => {
        const value = e.currentTarget.value.toLowerCase();
        this.props.newFilter( value );
      }

    render(){
      return ( <label>
        Find contacts by name
        <input
        type="text"
        name="Filter"
        onChange={this.onChangeInput}
        />
        </label>)
    }
}

export default Filter;

Filter.propTypes={
    newFilter: PropTypes.func.isRequired
}