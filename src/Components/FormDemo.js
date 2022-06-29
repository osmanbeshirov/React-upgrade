import React, { Component } from 'react'

export default class FormDemo extends Component {

    state = {
        userName: '',
        city: '',
    }

    formChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmitHandler = (e) => {

        e.preventDefault();

        alert(this.state.city);

       
    }
  render() {
    return (
      <div> 
        <form onSubmit={this.onSubmitHandler}>
            <h3>User</h3>
            <input onChange={this.formChange} type='text' name='userName'></input>
            <h1>User name is: {this.state.userName}</h1>

            <h3>City</h3>
            <input onChange={this.formChange} type='text' name='city'></input>
            <h1>City name is: {this.state.city}</h1>


            <input type="submit" value="Save"></input>



        </form>

      </div>
    )
  }
}
