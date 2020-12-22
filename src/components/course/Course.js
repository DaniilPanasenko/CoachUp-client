import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { getProfile } from '../../actions/profile'

class Course extends React.Component{


  componentDidMount() {
    //this.props.getProfile(this.props.match.params.login)
  }

  render(){
      return (
        <div>
        {this.props.match.params.id}
        </div>
      );
  }
}

const mapStateToProps=(state)=>({
  user: state.user,
  profile: state.profile
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getProfile: getProfile
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Course)
