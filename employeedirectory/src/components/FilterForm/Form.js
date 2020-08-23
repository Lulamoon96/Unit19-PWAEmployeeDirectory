import React, { Component } from "react";
import "./Form.css";

class Form extends Component {

        state = {
            filter: ""
        }

    handleInputChange = event => {

        const { name, value } = event.target
        this.setState({
          [name]: value
        })

    }

    handleFormSubmit = event => {

        event.preventDefault()
        console.log(this.props.test)
        this.props.filterEmploy(this.state.filter)
        this.setState({
          filter: ""
        })

    }

    render() {

        return (
          <div>
            <form className="form">
              <input
                value={this.state.filter}
                name="filter"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Occupation"
              />
              <button onClick={this.handleFormSubmit}>Filter by Occupation</button>
            </form>
          </div>
        )

    }

}

export default Form