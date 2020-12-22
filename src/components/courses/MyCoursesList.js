import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { getList } from '../../actions/myCoursesList'
import Course from './Course'
import AddForm from './AddForm'
class MyCoursesList extends React.Component{

  componentDidMount() {
    this.props.getList();
  }

  render(){
      return (
        <div class="container mt-5">
          <div class="row mt-3">
            <h2 class="text-info m-auto"><Trans>My courses</Trans></h2>
          </div>
          {
            this.props.myCoursesList.courses.map((item)=><Course history={this.props.history} courseId={item.id} name={item.name} countMebers={item.count_members}/>)
          }
          {this.props.user.isCoach?
          <div class="row mt-3">
            <button class="shadow btn btn-success btn-lg col-4 m-auto" data-toggle="modal" data-target="#addCourseModal">
              <Trans>Add</Trans>
            </button>
          </div>
          :null}
          <div class="modal fade" id="addCourseModal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <AddForm/>
          </div>
        </div>
      );
  }
}

const mapStateToProps=(state)=>({
  user: state.user,
  myCoursesList: state.myCoursesList
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getList: getList
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(MyCoursesList)
