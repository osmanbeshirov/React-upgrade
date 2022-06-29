import React, { Component } from 'react'

export default class FormDemo extends Component {

    state = {
        userName: ''
    }

    formChange = (e) => {
        this.setState({userName: e.target.value})
    }
  render() {
    return (
      <div> 
        <form>
            <h3>User</h3>
            <input onChange={this.formChange} type='text'></input>

            <h1>User name is: {this.state.userName}</h1>

        </form>

      </div>
    )
  }
}
