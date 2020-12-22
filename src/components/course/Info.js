import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'

class Info extends React.Component{
  render(){
      return (
        <div class="container mt-5">
          <div class="col-md-12">
            <div class="card shadow-lg">
              <div class="card-body">
                <div class="row">
                  <h1 class="ml-3 text-info">{this.props.course.courseInfo.name}</h1>
                  <h1 class="ml-auto mr-4 row justify-content-end">
                    <span class="badge badge-info">
                    {this.props.course.courseInfo.sport}
                    </span>
                  </h1>
                </div>
                <div class="row">
                  <h4 class="ml-3"><Trans>Сoach</Trans>: {this.props.course.courseInfo.coachName+" "+this.props.course.courseInfo.coachSurname} </h4>
                  <h4 class="ml-3 text-info">@{this.props.course.courseInfo.coachLogin} </h4>
                </div>
                <div class="row">
                  <h5 class="ml-3"><Trans>Description</Trans>: {this.props.course.courseInfo.description} </h5>
                </div>
                <div class="row">
                  <h3 class="ml-3 row justify-content-end">
                    <span class="badge badge-info">
                      {this.props.course.courseInfo.courseMember}<i class=" ml-2 fa fa-user"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
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
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Info)
