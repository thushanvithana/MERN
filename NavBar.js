import React, { Component } from 'react'; 

import "../css/styles.css"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>

        <div className="container-fluid"></div>

        <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-lable="TOggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link"  aria-current="page" href="/"><span className="btn btn-primary">Home Posts</span> </a>
                    <button className="btn btn-primary"><a href="/empposts" style={{textAlign:'center', textDecoration:'none', color:'white'}}> Employee Home</a></button>
                    <button className="btn btn-primary"><a href="/userpost/save" style={{textAlign:'center', textDecoration:'none', color:'white'}}> User interface</a></button>
                </li>
            </ul>
        </div>
      </nav>
    )
  }
}
