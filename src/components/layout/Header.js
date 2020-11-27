import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends React.Component {

  render() {
    return (
      <h1>hello world</h1>
    )
  }
}


const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(Header)
