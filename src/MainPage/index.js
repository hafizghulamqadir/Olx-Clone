import React from'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import {  facebook_login } from '../store/action'
import MainComponent from '../containers/MainComponent'
import Footer from '../containers/Footer'

class MainPage extends React.Component{
    render(){
     let user = this.props.current_user;
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><img src="data:image/png;base64,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" height="40px" width="60px" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          <li className="nav-item active">
          <a className="nav-link" href="#"><input placeholder="Pakistan" className="input-box" type="text" height="150"width="100"/><span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><input className="find-input" type="text" height="150"width="100"placeholder="Find Cars, Mobile Phones and more..." /><button className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></button></a>
              </li>
              <li className="nav-item">
              <Link className="nav-link"><i className="fa fa-comment-o comment" aria-hidden="true"></i></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link"><i class="fa fa-bell-o notification" aria-hidden="true"></i></Link>
              </li>
              <li className="nav-item">
                <Link className="login"><img className="userprofile" src="..." alt="" /></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/sellpage"><button className="sell-btn">+ SELL</button></Link>
              </li>
            </ul>
          </div>
        </nav>
        
        
        <div className="btn-group">
        <select name="devices">
        <optgroup label="All Categories">rtet</optgroup>
        <optgroup label="All Categories">
        <option value={1}>Mobile Phone</option>
        <br />
        <br />
        <option value={1}>Mobile Phone</option>
        <br />
        <br />
        <option value={2}>Gaming PS</option>
        </optgroup>
        </select>
        <Link className="headerlinks"to="/mobilephones">Mobile Phones </Link>
        <Link className="headerlinks"to="/cars">Cars </Link>
        <Link className="headerlinks"to="/motorcycles">Motorcycles </Link>
        <Link className="headerlinks"to="/houses">Houses </Link>
        <Link className="headerlinks"to="/tv-video-audio">TV - Video - Audio </Link>
        <Link className="headerlinks"to="/tablets">Tablets </Link>
        <Link className="headerlinks"to="/plots">Land & Plots</Link>
        </div>
        <MainComponent />
        <Footer />  
            
            {/* <h4>Welcome! {user.name}</h4>
            <img src={user.profile} alt="" />
            <h6>Email: {user.email}</h6> */}
            </div> 
        )
    }
}




const mapStateToProps = (state) => ({
    current_user: state.current_user,

   })
   

// const mapDispatchToProps = (dispatch) =>({
// })

export default connect(mapStateToProps, null)(MainPage)
