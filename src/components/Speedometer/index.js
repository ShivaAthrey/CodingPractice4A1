// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  increaseCount = () => {
    const {count} = this.state
    this.setState({count: count + 10})
  }
  decreaseCount = () => {
    const {count} = this.state
    this.setState({count: count - 10})
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p className="para">Min limit is 0mph, max limit is 200mph</p>
        <div className="sub-container">
          <button
            type="button"
            onClick={this.increaseCount}
            className="btn btn-primary"
          >
            Accelerate
          </button>
          <button
            type="button"
            onClick={this.decreaseCount}
            className="btn btn-info"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
