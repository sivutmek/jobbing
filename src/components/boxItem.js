import React from 'react'

const BoxItem = (props) => {
  const {company_logo, company, title, location, type} = props.item

  return(
    <div className="card" onClick={() => props.handleDetailPage(props.item)}>
        <img src={company_logo} height="30%" width="30%"/>
        <div class="container">
          <h4><b>{company}</b></h4> 
          <p>{title}</p> 
          <p>{location}</p>
          <p>{type}</p>
          <div className="add-button">
          {/* <button>Add</button> */}
          <button onClick={props.handleFaveToggle}>{(props.isFave) ? "Remove" : "Add"}</button>
          </div>
          </div>
        </div>
    )
}

export default BoxItem
