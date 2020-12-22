import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'
import { getTrainingsList } from '../../actions/course'
import Training from './Training'
import AddForm from './AddForm'


class TrainingsList extends React.Component{

  componentDidMount() {
    this.props.getTrainingsList(this.props.course.courseInfo.id);
  }

  render(){
      return (
        <div class="container mt-5">
          <div class="row mt-3">
            <h2 class="text-info m-auto"><Trans>Trainings</Trans></h2>
          </div>
          {
            this.props.course.trainings.map((item)=><Training history={this.props.history} trainingId={item.id} name={item.name}/>)
          }
          {this.props.course.courseInfo.coachLogin==this.props.user.login?
          <div class="row mt-3">
            <button class="shadow btn btn-success btn-lg col-4 m-auto" data-toggle="modal" data-target="#addTrainingModal">
              <Trans>Add</Trans>
            </button>
          </div>
          :null}
          <div class="modal fade" id="addTrainingModal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <AddForm/>
          </div>
        </div>
      );
  }
}

const mapStateToProps=(state)=>({
  user: state.user,
  course: state.course
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      getTrainingsList: getTrainingsList
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(TrainingsList)
