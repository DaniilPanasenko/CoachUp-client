import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'

class Course extends React.Component{
  handleClick = ()=> {
    this.props.history.push('/course/'+this.props.courseId);
  }
  render(){
      return (
        <div class="container mt-3">
          <button type="button" class="shadow btn btn-outline-info btn-lg btn-block" onClick={this.handleClick}>
            <div class="row mt-1">
            <h3 class="col-9 text-left">{this.props.name}</h3>
            <h3 class="col-3 text-right">{this.props.countMebers}<i class=" ml-2 fa fa-user"></i></h3>
            </div>
          </button>
        </div>
      );
  }
}
export default Course;
/*const mapStateToProps=(state)=>({
  user: state.user,
  myCoursesList: state.myCoursesList
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getList: getList
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyCoursesList)*/
