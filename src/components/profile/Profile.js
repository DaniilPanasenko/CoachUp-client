import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { getProfile } from '../../actions/profile'

class Profile extends React.Component{
  render(){
    if(this.props.page.page=='profile' && this.props.page.profileLogin!=null){
      if(this.props.page.profileLogin != this.props.profile.login){
        //this.props.getProfile(this.props.page.profileLogin);
        return null;
      }

      return (
        <div>
        {this.props.page.profileLogin+"/"+this.props.profile.login+" "+JSON.stringify(this.props.profile, null, 4)}
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps=(state)=>({
  page: state.page,
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
