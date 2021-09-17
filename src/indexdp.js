import React, { Component } from 'react'
const axios = require('axios').default
const backendURL1 = "http://localhost:2221/dp"
const backendURL2 = "http://localhost:2221/lt"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: '',
      divs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit1 = this.handleSubmit1.bind(this)
    this.handleSubmit2 = this.handleSubmit2.bind(this)
  }

  handleChange(event) {
    this.setState({ uri: event.target.value})
  }

  async handleSubmit1(event) {
    event.preventDefault()
    console.log(this.state.uri)
    let returnDiv = await axios.post(backendURL1)
    this.setState({
      divs: returnDiv.data.page
    })
  }

  async handleSubmit2(event) {
    event.preventDefault()
    console.log(this.state.uri)
    let returnDiv = await axios.post(backendURL2)
    this.setState({
      divs: returnDiv.data.page
    })
  }

  render() {
    return (
      <div>
        <h2>link should be for disha page</h2>
        <form onSubmit={this.handleSubmit1}>
          <label>URI:
            <input name="uri" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <h2>link should be for link tree</h2>
        <form onSubmit={this.handleSubmit2}>
          <label>URI:
            <input name="uri" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div dangerouslySetInnerHTML={{__html: this.state.divs}}></div>
      </div>
      
    )
  }
}
export default App

