import React, { Component } from 'react'
import Filter from './filter'

export default class ModeList extends Component {
  render() {
    const {handleInput1, handleInput2, handleSearchClick, handleClearClick} = this.props
    return (
      <div className="left-grid">
          <div className="category">
          <h2>Mode</h2>
          </div>
          <div className="mode-grids">
            <h2>Search</h2>
            <h2>Favorite</h2>
          </div>
          <Filter handleInput1={handleInput1} handleInput2={handleInput2} handleSearchClick={handleSearchClick} handleClearClick={handleClearClick}/>
        </div>
    )
  }
}
