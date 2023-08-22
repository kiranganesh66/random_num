import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  changer = () => {
    const randomNum = Math.ceil(Math.random() * 100)

    this.setState(prevState => ({count: randomNum}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="Main_bg">
        <div className="sub_bg">
          <h1 className="Heading">Random Number</h1>
          <p className=" ">Generate a random number in the range of 0 to 100</p>
          <button className="" type="button" onClick={this.changer}>
            Generate
          </button>
          <p className="Heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
