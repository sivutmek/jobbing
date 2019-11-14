import React from 'react'
import ReactHtmlParser from 'react-html-parser';

const DetailPage = (props) => {
  const {type, company, company_url, location, how_to_apply, description, company_logo} = props.item
  return(
    <div>
      <div className="go-back-button">
        <button onClick={props.handleGoBack}>Go Back</button>
      </div>
      <div className="detail-info">
        <img src={company_logo} height="30%" width="30%"/>
        <br/>
        <h1>Company name: {company}</h1>
        <a href={company_url}>Company Link</a>
        <h2>Location: {location}</h2>
        <h2>Type: {type}</h2>
        <br/>
        <h3>Description:</h3>
        <h4>{ReactHtmlParser(description)}</h4>
        <br/>
        <h2>How to apply: {ReactHtmlParser(how_to_apply)}</h2>

      </div>
    </div>
  )
}

export default DetailPage
