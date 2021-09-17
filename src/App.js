import React, { Component } from 'react'
const axios = require('axios').default
const dpEnd = "http://localhost:2221/dp"
const ltEnd = "http://localhost:2221/lt"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: '',
      divs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitDp = this.handleSubmitDp.bind(this)
    this.handleSubmitLt = this.handleSubmitLt.bind(this)
  }

  handleChange(event) {
    this.setState({ uri: event.target.value})
  }

  async handleSubmitDp(event) {
    event.preventDefault()
    const uri = {
      uri: this.state.uri
    }
    let returnDiv = await axios.post(dpEnd, uri)
    this.setState({
      divs: returnDiv.data.page
    })
  }

  async handleSubmitLt(event) {
    event.preventDefault()
    const uri = {
      uri: this.state.uri
    }
    let returnDiv = await axios.post(ltEnd, uri)
    this.setState({
      divs: returnDiv.data.page
    })
  }

  render() {
    return (
      <div>
        <h5>Generally, res may take up to 3 sec</h5>
        <h6>link should be for disha page</h6>
        <form onSubmit={this.handleSubmitDp}>
          <label>URI:
            <input name="uri" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>        <hr />

        <h6>link should be for link tree</h6>
        <form onSubmit={this.handleSubmitLt}>
          <label>URI:
            <input name="uri" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <hr />

        <div dangerouslySetInnerHTML={{__html: this.state.divs}}></div>
      </div>
      
    )
  }
}
export default App

