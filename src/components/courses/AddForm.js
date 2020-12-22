import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import $ from 'jquery'
import { getList } from '../../actions/myCoursesList'
import { addCourse } from '../../actions/myCoursesList'

class AddForm extends React.Component{
  constructor(){
    super()
    this.state = {
      name: '',
      description: ''
    }
  }
  handleClick =()=>{
    if(this.state.name!='' && this.state.description!=''){
      this.props.addCourse({name:this.state.name, description:this.state.description});
      $('#addCourseModal').modal('hide');
    }
  }
  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }
  render(){
      return (
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"><Trans>Add course</Trans></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="col-md-12 mb-3">
                <label for="addCourseName"><Trans>Name</Trans></label>
                <input type="text" class="form-control" name="name" id="addCourseName" value={this.state.name} onChange={this.handleUserInput}/>
              </div>
              <div class="col-md-12 mb-3">
                <label for="addCourseDescription"><Trans>Description</Trans></label>
                <textarea class="form-control" name="description" id="addCourseDescription" value={this.state.description} onChange={this.handleUserInput}></textarea>
              </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal"><Trans>Close</Trans></button>
              <button type="button" class="btn btn-success" onClick={this.handleClick}><Trans>Add</Trans></button>
            </div>
            </div>
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
      addCourse: addCourse,
      getList: getList
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(AddForm)
