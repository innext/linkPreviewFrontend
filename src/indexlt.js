import { Component } from "react"
const axios = require('axios').default
const backendURL = "http://localhost:2221/dp"
const baseURL = "http://localhost:3000"
const uri = {uri: "https://lj.disha.page/"}

let headers = new Headers()
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Origin',baseURL)

class indexdp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        divs: []
    }
  }

  async componentDidMount() {
    let returnDiv = await axios.post(backendURL, uri, headers)
    this.setState({
      divs: returnDiv.data.page
    })
  }

  render() {
    return(
      //The term dangerously is used here to notify that it will be vulnerable to cross-site scripting attacks (XSS).
      <div dangerouslySetInnerHTML={{__html: this.state.divs}}></div>
    )
  }

}

export default indexdp;