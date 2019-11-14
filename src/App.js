import React,{Component} from 'react';
import './App.css';
import BoxItem from './components/boxItem'
import DetailPage from './components/detailPage'

const temp = {
  "id": "4cd29974-e48b-11e8-8478-fb9810f86b79",
    "type": "Full Time",
    "url": "https://jobs.github.com/positions/4cd29974-e48b-11e8-8478-fb9810f86b79",
    "created_at": "Sat Nov 10 02:02:55 UTC 2018",
    "company": "Sesame",
    "company_url": "http://sesamecare.com",
    "location": "New York; Berlin",
    "title": "Software engineer (back end)",
    "description": "<p>We’re Sesame and we’re building a transformative health care platform that makes it easier and more affordable for all Americans to access high-quality health care.</p>\n<p>Our all-star team is primed for the journey of re-shaping American health care to put people like you and your family first. Unaffordable health care that’s hard to navigate is what keeps us up at night.</p>\n<p>We believe everyone should be able to get high-quality care for a fair price. That’s why we’re working with doctors who share our vision for giving people a better way to get the care they need without the stress, frustrations, and rip-offs of the current health care system.</p>\n<p>We’re passionate about building a new kind of health care economy that works for everyday people, and this is just the beginning.</p>\n<p>We must be on to something, since we’re proud to say:</p>\n<ul>\n<li>We have engineering teams in New York and Berlin</li>\n<li>We've raised millions in funding to grow U.S. operations.</li>\n</ul>\n<p>Want to help? Join our team. We are a small group of engineers, but we’re growing and looking for experienced back end engineers with a focus on Java to expand our ranks here in New York and Berlin.</p>\n<p><strong>About you:</strong></p>\n<ul>\n<li>Comfortable with Java and microservices.</li>\n<li>You seek and prefer simple solutions to complex problems.</li>\n<li>You strive to write clean, quality code and enjoy doing it.</li>\n<li>You maintain a healthy balance between perfectionism and actually getting stuff done.</li>\n<li>You either have experience with the technologies we currently use (or a strong interest in them) and the curiosity to learn new languages and frameworks.</li>\n<li>You love developing software. You have 2+ years of industry experience.</li>\n<li>You are a strong team player, have strong writing skills, and enjoy collaborating with others.</li>\n<li>You are attuned to the fundamentals of user design and user experience.</li>\n</ul>\n<p><strong>Our technology stack includes:</strong></p>\n<ul>\n<li>Java 10</li>\n<li>Spring Boot</li>\n<li>Kubernetes</li>\n<li>Docker</li>\n<li>GraphQL</li>\n<li>Pub/Sub</li>\n<li>Postgres</li>\n<li>Python</li>\n<li>NodeJs</li>\n</ul>\n<p><strong>Our Offer:</strong>\nWorking with us means you will be challenged every day by our customers, our partners, and your peers. You can be yourself, speak freely, be trusted and respected.</p>\n<p><strong>Perks:</strong>\nCompetitive total compensation package with generous equity.\nGenerous, flexible vacation policy.\nA fun and international work environment with teams in New York and Europe.\nThe opportunity to work independently and occasionally remotely.\nThe chance to learn first-hand about the biggest industry in the world.</p>\n<p>Sesame is an equal opportunity employer and we value diversity at our company. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</p>\n",
    "how_to_apply": "<p><a href=\"https://jobs.lever.co/sesamecare/26d259b5-5bcc-4ee9-a5d0-068d9c856381?lever-origin=applied&amp;lever-source%5B%5D=GitHub\">https://jobs.lever.co/sesamecare/26d259b5-5bcc-4ee9-a5d0-068d9c856381?lever-origin=applied&amp;lever-source%5B%5D=GitHub</a></p>\n",
    "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcWRXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bfdeee729a4dbb9e1851c0362a1cf73bf3b6c646/03acb87e-f369-4964-950b-80043ff18ae1"
}

class App extends Component {
  state={
    mode: 'search',
    data: [],
    input1: '',
    input2: '',
    isDetail: false,
    selectedItem: {},
    faves: []
  }

  // componentDidMount = () => {
  //   const url = `https://github-jobs-proxy.appspot.com/positions?description=&location=`;
  //   fetch(url)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => {
  //       this.setState({ data });
  //     });
  // }

  handleInput1 = (e) => {
    let input1 = e.target.value
    this.setState({input1})
  }

  handleInput2 = (e) => {
    let input2 = e.target.value
    this.setState({input2})
  }

  handleSearchClick = () => {
    const url = `https://github-jobs-proxy.appspot.com/positions?description=${this.state.input1}&location=${this.state.input2}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({data, isDetail:false});
      });
  }

  handleChangeMode = (mode) => {
    this.setState({mode})
  }

  handleDetailPage = (item) => {
    this.setState({isDetail:true, selectedItem:item})
  }

  handleGoBack = () => {
    this.setState({isDetail:false,selectedItem:{}})
  }

  handleClearSearch = () => {
    const url = `https://github-jobs-proxy.appspot.com/positions?description=&location=`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({data, input1:'', input2:''});
      });
  }

  handleFaveToggle = (e, item) => {
    e.stopPropagation();
    const faves = [...this.state.faves];
    const jobIndex = faves.indexOf(item);
    if (jobIndex === -1) {
      faves.push(item);
    } else {
      faves.splice(jobIndex, 1);
    }
    this.setState({ faves });
  };

  render(){
    let jobs = []
    let faveJobs
    const {data, isDetail, mode, faves} = this.state
    if(data!==[] && isDetail!==true && mode==='search'){
      jobs = (data).map((item, i) => 
      (<BoxItem 
        item={item} 
        key={i} 
        handleDetailPage={() => this.handleDetailPage(item)}
        isFave = {this.state.faves.includes(item)}
        handleFaveToggle = {(e) => this.handleFaveToggle(e,item)}
        />))
    }
    else if(isDetail!==true && mode==='fave'){
      if(faves!==[]){
        faveJobs = (faves).map((item, i) =>
        (<BoxItem 
          item={item} 
          key={i} 
          handleDetailPage={() => this.handleDetailPage(item)}
          isFave = {this.state.faves.includes(item)}
          handleFaveToggle = {(e) => this.handleFaveToggle(e,item)}
        />))
        }
    }

    return (
      <div>
      <div className="app-header">
        <h1>Jobbing</h1> 
      </div>

      <div className="grids">
        <div className="left-grid">
          <div className="category">
          <h2>Mode</h2>
          </div>
          <div className="mode-grids">
            <div className={"search-mode-tab" + (this.state.mode === "search" ? " press" : "")} onClick={()=>this.handleChangeMode('search')}>
              <h2>Search</h2>
            </div>
            <div className={"favorite-mode-tab" + (this.state.mode === "fave" ? " press" : "")} onClick={()=>this.handleChangeMode('fave')}>
              <h2>Favorite</h2>
            </div>
          </div>

          {this.state.mode === "search" ? 
          <div className="test-flex">
          <div>
            <h3>Field</h3>
            <input type="text" onChange={this.handleInput1} value={this.state.input1}/>
          </div>
          <div>
            <h3>Location</h3>
            <input type="text" onChange={this.handleInput2} value={this.state.input2}/>
          </div>
          <div className="">
            <button onClick={this.handleSearchClick}>
              search
            </button>
            <button onClick={this.handleClearSearch}>
              clear
            </button>
          </div>
          </div>
            : ''}

        </div>

        <div className="right-grid"> 
          <div className="category-noline">
            <h2>Result</h2>
          </div>

          <div className="result-grids">
            {jobs}
            {faveJobs}
          </div>

          <div className="detail">
            {(isDetail===true) ? 
            <DetailPage item={this.state.selectedItem} handleGoBack={this.handleGoBack}/> : ''}
          </div>

        </div>
      </div>
      </div>
    );
  }
}

export default App;
