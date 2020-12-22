import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { getInfo } from '../../actions/course'
import  Info  from './Info'
import TrainingsList from './TrainingsList'

class Course extends React.Component{


  componentDidMount() {
    this.props.getInfo(this.props.match.params.id)
  }

  render(){
      return (
        <div>
          <Info />
          <TrainingsList history={this.props.history}/>
        </div>
      );
  }
}

const mapStateToProps=(state)=>({
  course: state.course,
  user: state.user,
  profile: state.profile
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getInfo: getInfo
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Course)
