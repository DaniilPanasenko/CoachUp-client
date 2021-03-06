import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { getProfile } from '../../actions/profile'
import Info from './Info'

class Profile extends React.Component{

  componentDidMount() {
    this.props.getProfile(this.props.match.params.login)
  }

  render(){
      return (
        <div>
          <Info />
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
export default connect(mapStateToProps, matchDispatchToProps)(Profile)
