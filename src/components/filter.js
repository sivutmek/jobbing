import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    const {handleInput1, handleInput2, handleSearchClick, handleClearSearch} = this.props
    return (
      <div className="test-flex">
      <div>
        <h3>Field</h3>
        <input type="text" onChange={handleInput1} value={this.state.input1}/>
      </div>
      <div>
        <h3>Location</h3>
        <input type="text" onChange={handleInput2} value={this.state.input2}/>
      </div>
      <div className="">
        <button onClick={handleSearchClick}>
          search
        </button>
        <button onClick={handleClearSearch}>
          clear
        </button>
      </div>
      </div>
    )
  }
}

