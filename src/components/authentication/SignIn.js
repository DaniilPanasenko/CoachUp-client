import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { setPage } from '../../actions/page'
import { login } from '../../actions/user'

class SignIn extends React.Component{
  constructor() {
    super()
    this.state = {
      Login: '',
      Password: ''
    }
  }
  handleRegisterClick = () => {
    this.props.setPage('signup')
  }

  handleLoginClick = () => {
    let form = document.getElementById('signin-form');
    this.state.Login = form.login.value;
    this.state.Password = form.password.value;
    this.props.login(this.state)
  }

  render(){
    if(this.props.page.page=='signin'){
  return (
    <div class="container mt-5">
  <div class="col-md-4 offset-md-4">
    <div class="card">
      <div class="card-header text-center">
        <h4>Sign In</h4>
      </div>
      <div class="card-body">
        <form id = "signin-form">

          <div class="form-group">
            <label for="email">Login</label>
            <input name="login" id="login" class="form-control"/>
          </div>

          <div class="form-group">
            <div class="row">
              <div class="col-3">
                <label for="password">Password</label>
              </div>
            </div>

            <input name="password" id="password" class="form-control" type="password" />
          </div>
        </form>
        <div class="form-group">
          <button class="btn btn-primary btn-block" onClick={()=>this.handleLoginClick()}>Login</button>
        </div>
        <div class="form-group">
          <button class="btn btn-success btn-block" onClick={()=>this.handleRegisterClick()}>Register</button>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
else{
  return(
    <div></div>
  );
}
}
}

const mapStateToProps=(state)=>({
  page: state.page,
  user: state.user
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      setPage: setPage,
      login: login
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SignIn)
