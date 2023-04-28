// import {Component} from 'react'

// import './index.css'

// class Counter extends Component {
//   state = {count: 0}

//   onIncrement = () => {
//     this.setState(prevState => ({count: prevState.count + 1}))
//   }

//   onDecrement = () => {
//     this.setState(prevState => ({count: prevState.count - 1}))
//   }

//   render() {
//     const {count} = this.state
//     return (
//       <div className="container">
//         <h1 className="count">Count {count}</h1>
//         <button type="button" className="button" onClick={this.onIncrement}>
//           Increase
//         </button>
//         <button type="button" className="button" onClick={this.onDecrement}>
//           Decrease
//         </button>
//       </div>
//     )
//   }
// }

// export default Counter

// Write your code here
import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="span">{count} </span>
          times
        </h1>
        <p className="paragraph">click the button to increase the count</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          click me!
        </button>
      </div>
    )
  }
}

export default Counter
