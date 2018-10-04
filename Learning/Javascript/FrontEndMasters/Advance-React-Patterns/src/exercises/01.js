// Building the toggle component

import React, {Component} from 'react'
// 🐨 uncomment this import to get the switch component.
// It takes an `onClick` and an `on` prop
import {Switch} from '../switch'

class Toggle extends Component {
  constructor(){
    super()
    this.state = {
      on :false
    }
  }
 
  Toggle = () => {
    this.setState((currentState) => {
      return {on: !currentState.on}
    },()=> this.props.onToggle(this.state.on))
  }
  // 🐨 this toggle component is going to need to have state for `on`
  //
  // You'll also want a method to handle when the switch is clicked
  // which will update the `on` state and call the `onToggle` prop
  // 💰 this.props.onToggle(this.state.on)
  render() {
    // 🐨 here you'll want to return the switch with the `on` and `onClick` props
    return <Switch on={this.state.on} onClick = {this.Toggle} />
  }
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.
// You can make all the tests pass by updating the Toggle component.
function Usage({
  onToggle = (...args) => console.log('onToggle', ...args),
}) {
  return <Toggle onToggle={onToggle} />
}
Usage.title = 'Build Toggle'

export {Toggle, Usage as default}
