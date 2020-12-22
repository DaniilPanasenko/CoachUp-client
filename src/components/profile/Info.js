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
                <div class="row container">
                  <div class="col-4 avatar ">
                    <img class=" p-0 rounded card col-4 img-fluid col-12" src={this.props.profile.avatar}/>
                  </div>
                  <div class="col container">
                    <div class="row">
                      <div class="col-9">
                        <div class="row">
                          <h1 class="ml-3 text-info">{this.props.profile.name}</h1>
                          <h1 class="ml-3 text-info">{this.props.profile.surname}</h1>
                          <h1 class="ml-3 row "><span class="badge badge-info">
                          {this.props.profile.sex=="M"?
                          <i class="fa fa-male mr-0"></i>:
                          <i class="fa fa-female mr-0"></i>
                          }
                          </span></h1>
                        </div>
                      </div>
                      <h1 class="ml-5 row justify-content-end">
                        <span class="badge badge-info">
                        {this.props.profile.isCoach? <Trans>Coach</Trans> : <Trans>Trainee</Trans>}
                        </span>
                      </h1>
                    </div>
                    <div class="row">
                      <h3 class="ml-3 text-dark">{this.props.profile.login}</h3>
                    </div>
                    <div class="row">
                      <p class="ml-3 text-dark">{this.props.profile.aboutMe}</p>
                    </div>
                    <div class="row align-items-end">
                      <button type="button" class="col-5 ml-3 btn btn-warning btn-lg">
                      <i class="fa fa-trophy"></i>
                      {
                        this.props.profile.ratePoints+" "
                      }
                       points (
                      {
                        this.props.profile.ratePlace+" "
                      }
                       place)
                      </button>
                      <button type="button" class="col ml-3 btn btn-info btn-lg"><Trans>Friends</Trans>
                        <span class="ml-2 badge badge-light badge-pill notifications">{this.props.profile.countFriends}</span>
                      </button>
                      <button type="button" class="col ml-3 btn btn-info btn-lg"><Trans>Subscribes</Trans>
                        <span class="ml-2 badge badge-light badge-pill notifications">{this.props.profile.countSubscribes}</span>
                      </button>
                    </div>
                    <div class="row d-flex align-items-end mt-3 pr-3">
                      <button type="button" class="mt-auto col-12 ml-3 btn btn-success btn-lg"><Trans>Add to friends</Trans>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
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
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Info)
