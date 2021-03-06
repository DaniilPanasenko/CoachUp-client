import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { login, loginException } from '../../actions/user'
import { i18n } from '@lingui/core'

class SignIn extends React.Component{
  constructor() {
    super()
    this.state = {
      login: '',
      password: '',
      loginSend: false
    }
  }

  componentDidMount() {
    if(this.props.user.isAuthorized){
      this.props.history.push('/profile/'+this.props.user.login)
    }
  }

  handleRegisterClick = () => {
      this.props.history.push('/signup')
  }

  handleLoginClick = () => {
    this.setState({loginSend: true})
    let t = true;
    for(let i=0; i<this.props.admin.ban.length; i++){
      if(this.props.admin.ban[i]==this.state.login){
        t=false;
        this.props.loginException("You are banned")
      }
    }
    if(t && this.state.login!='' && this.state.password!=''){
      this.props.login({login:this.state.login, password:this.state.password})
    }
  }

  getLoginStatus = () => {
    if(this.state.login=='' && this.state.loginSend){
      return "is-invalid";
    }
    return "";
  }

  getPasswordStatus = () => {
    if(this.state.password=='' && this.state.loginSend){
      return "is-invalid";
    }
    return "";
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.user.isAuthorized) {
      if(nextProps.user.login=='admin'){
        this.props.history.push('/admin')
      }
      else{
        this.props.history.push('/profile/'+nextProps.user.login)
      }
    }
  }

  render(){
      return (
        <div class="container mt-5">
          <div class="col-md-4 offset-md-4">
            <div class="card">
              <div class="card-header text-center">
                <h4><Trans>Sign In</Trans></h4>
              </div>
              <div class="card-body">
                <form id = "signin-form">
                  <div class="form-group">
                    <label><Trans>Login</Trans></label>
                    <input name="login" id="login" class={"form-control "+this.getLoginStatus()} type="login" value={this.state.login} onChange={this.handleUserInput}/>
                  </div>
                  <div class="form-group">
                        <label><Trans>Password</Trans></label>
                        <input name="password" id="password" class={"form-control "+this.getPasswordStatus()} type="password" value={this.state.password} onChange={this.handleUserInput}/>
                  </div>
                  {this.props.user.loginException != null?
                      <div class="alert alert-danger pt-2 pb-2 mt-3" role="alert" >
                        <i class="fa fa-times-circle"></i>
                        {i18n._(this.props.user.loginException)}
                      </div>
                    : null}
                </form>
                <div class="form-group">
                  <button class="btn btn-primary btn-block" onClick={()=>this.handleLoginClick()}><Trans>Login Sign In</Trans></button>
                </div>
                <div class="form-group">
                  <button class="btn btn-success btn-block" onClick={()=>this.handleRegisterClick()}><Trans>Register</Trans></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps=(state)=>({
  user: state.user,
  admin: state.admin
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      login: login,
      loginException: loginException
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SignIn)
