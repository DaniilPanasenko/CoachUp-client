import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import logo from "../../img/logo.png"
import $ from 'jquery';


class HeaderTrainee extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-mainbg">
      <a class="navbar-brand navbar-logo" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars text-white"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-auto">
              <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
              <li class="nav-item active">
                  <a class="nav-link" href="javascript:void(0);"><i class="fa fa-id-card fa-1x"></i>Profile</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0);"><i class="fa fa-list-ul fa-1x "></i>Courses</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0);"><i class="fa fa-trophy fa-1x "></i>Rates</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="javascript:void(0);"><i class="fa fa-search fa-1x "></i>Search</a>
              </li>
          </ul>
      </div>
<form class="form-inline pl-5">
              <div class=" dropdown">
                <a class="link-white nav-link dropdown-toggle" href="#" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag flag-icon flag-icon-gb"> </span></a>
                <div class="dropdown-menu p-1" aria-labelledby="language">
                  <a class="dropdown-item" ><span class="flag flag-icon flag-icon-gb"> </span> English</a>
                  <a class="dropdown-item" href="#it"><span class="flag flag-icon flag-icon-ua"> </span> Ukrainian</a>
                  <a class="dropdown-item" href="#ru"><span class="flag flag-icon flag-icon-ru"> </span> Russian</a>
                </div>
              </div>
              <i className="fa fa-bell-o fa-1x white-icons padding-right-25" aria-hidden="true"></i>
              <i className="fa fa-user-circle-o fa-2x white-icons" aria-hidden="true"></i>
              <div class="dropdown">
                <a class="link-profile nav-link dropdown-toggle" id="profileDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  DaniilPanasenko01
                  </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">Log Out</a>
                </div>
              </div>
            </form>
  </nav>
    )
  }
}


const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(HeaderTrainee)
