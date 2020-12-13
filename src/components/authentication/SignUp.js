import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
import { getSports } from '../../actions/sport'
import { registration } from '../../actions/user'
import { i18n } from '@lingui/core'

class SignUp extends React.Component{
  constructor() {
    super()
    this.state = {
      loginStart: false,
      login:'',
      loginError:[],
      loginValid: false,

      emailStart: false,
      email:'',
      emailError:[],
      emailValid: false,

      nameStart: false,
      name:'',
      nameError:[],
      nameValid: false,

      surnameStart: false,
      surname:'',
      surnameError:[],
      surnameValid: false,

      passwordStart: false,
      password:'',
      passwordError:[],
      passwordValid: false,

      passwordConfirmStart: false,
      passwordConfirm:'',
      passwordConfirmError:[],
      passwordConfirmValid: false,

      isCoach:false,
      sport: 'Sport',
      sex:'M'
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    switch(name){
      case 'login':
        this.setState({loginStart: true});
        this.validateLogin(value);
        break;
      case 'email':
        this.setState({emailStart: true});
        this.validateEmail(value);
        break;
      case 'name':
        this.setState({nameStart: true});
        this.validateName(value);
        break;
      case 'surname':
        this.setState({surnameStart: true});
        this.validateSurname(value);
        break;
      case 'passwordConfirm':
        this.setState({passwordConfirmStart: true});
        this.validatePasswordConfirm(value, this.state.password);
        break;
      case 'password':
        this.setState({passwordStart: true});
        this.validatePassword(value);
        break;
    }
  }
  handlerAccount = (e) => {
    this.props.getSports();
    var accountRadioButtons = document.getElementsByName('accountRadioButtons');
    for (var i = 0; i < accountRadioButtons.length; i++) {
        if (accountRadioButtons[i].type == "radio" && accountRadioButtons[i].checked) {
            if(accountRadioButtons[i].id=='traineeRadioButton'){
              this.setState({isCoach: false});
            }
            else{
              this.setState({isCoach: true});
            }
        }
    }
  }
  handlerSex = (e) => {
    var sexRadioButtons = document.getElementsByName('sexRadioButtons');
    for (var i = 0; i < sexRadioButtons.length; i++) {
        if (sexRadioButtons[i].type == "radio" && sexRadioButtons[i].checked) {
            if(sexRadioButtons[i].id=='maleRadioButton'){
              this.setState({sex: 'M'});
            }
            else{
              this.setState({sex: 'F'});
            }
        }
    }
  }
  handlerSport = (name) => {
    this.setState({sport: name});
  }

  validateLogin = (login) =>{

    if(login!=null && login.length!=0 && login[login.length-1]==' '){
      login = login.substring(0,login.length-1);
      this.setState({login: login});
    }
    let result =[];
    if(/[^0-9a-zA-Z_]/.test(login)!=false){
      result.push(<Trans>Only latyns letters, numbers and _</Trans>);
    }
    if(login.length < 4){
       result.push(<Trans>Min 4 symbols</Trans>);
    }
    if(login.length > 20){
       result.push(<Trans>Max 20 symbols</Trans>);
    }
    if(/[^a-zA-Z]/.test(login.substring(0,1))){
      result.push(<Trans>First latter</Trans>);
    }
    this.setState({loginError: result});
    if(result.length!=0){
      this.setState({loginValid: false});
    }
    else{
      this.setState({loginValid: true});
    }
  }
  validateEmail = (email) =>{
    if(email!=null && email.length!=0 && email[email.length-1]==' '){
      email = email.substring(0,email.length-1);
      this.setState({email: email});
    }
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let result =[];
    if(regex.test(email)==false){
      result.push(<Trans>Is not email</Trans>);
    }
    this.setState({emailError: result});
    if(result.length!=0){
      this.setState({emailValid: false});
    }
    else{
      this.setState({emailValid: true});
    }
  }
  validateName = (name) =>{
    const regex = /^\p{L}[\p{L}\p{M}\. ]*$/u
    let result =[];
    if(regex.test(name)==false){
      result.push(<Trans>Only letters</Trans>);
    }
    this.setState({nameError: result});
    if(result.length!=0){
      this.setState({nameValid: false});
    }
    else{
      this.setState({nameValid: true});
    }
  }
  validateSurname = (surname) =>{
    const regex = /^\p{L}[\p{L}\p{M}\. ]*$/u
    let result =[];
    if(regex.test(surname)==false){
      result.push(<Trans>Only letters</Trans>);
    }
    this.setState({surnameError: result});
    if(result.length!=0){
      this.setState({surnameValid: false});
    }
    else{
      this.setState({surnameValid: true});
    }
  }
  validatePassword = (password) =>{
    if(password!=null && password.length!=0 && password[password.length-1]==' '){
      password = password.substring(0,password.length-1);
      this.setState({password: password});
    }
    let result =[];
    if(password.length<8){
      result.push(<Trans>Min 8 symbols</Trans>);
    }
    this.setState({passwordError: result});
    if(result.length!=0){
      this.setState({passwordValid: false});
    }
    else{
      this.setState({passwordValid: true});
    }
      this.validatePasswordConfirm(this.state.passwordConfirm, password)
  }
  validatePasswordConfirm = (confirmPassword, password) =>{
    if(confirmPassword!=null && confirmPassword.length!=0 && confirmPassword[confirmPassword.length-1]==' '){
      confirmPassword = confirmPassword.substring(0,confirmPassword.length-1);
      this.setState({passwordConfirm: confirmPassword});
    }
    let result =[];
    if(password!=confirmPassword){
      result.push(<Trans>Password mismatch</Trans>);
    }
    this.setState({passwordConfirmError: result});
    if(result.length!=0){
      this.setState({passwordConfirmValid: false});
    }
    else{
      this.setState({passwordConfirmValid: true});
    }
  }

  getLoginStatus = () => {
    if(!this.state.loginStart){
      return "";
    }
    if(this.state.loginValid){
      return "is-valid";
    }
    return "is-invalid";
  }
  getNameStatus = () => {
    if(!this.state.nameStart){
      return "";
    }
    if(this.state.nameValid){
      return "is-valid";
    }
    return "is-invalid";
  }
  getSurnameStatus = () => {
    if(!this.state.surnameStart){
      return "";
    }
    if(this.state.surnameValid){
      return "is-valid";
    }
    return "is-invalid";
  }
  getEmailStatus = () => {
    if(!this.state.emailStart){
      return "";
    }
    if(this.state.emailValid){
      return "is-valid";
    }
    return "is-invalid";
  }
  getPasswordStatus = () => {
    if(!this.state.passwordStart){
      return "";
    }
    if(this.state.passwordValid){
      return "is-valid";
    }
    return "is-invalid";
  }
  getPasswordConfirmStatus = () => {
    if(!this.state.passwordConfirmStart){
      return "";
    }
    if(this.state.passwordConfirmValid){
      return "is-valid";
    }
    return "is-invalid";
  }

  handleRegistration = () => {
    let registration = true;
    if(!this.state.loginValid){
      this.setState({loginStart: true});
      registration = false;
    }
    if(!this.state.passwordValid){
      this.setState({passwordStart: true});
      registration = false;
    }
    if(!this.state.passwordConfirmValid){
      this.setState({passwordConfirmStart: true});
      registration = false;
    }
    if(!this.state.emailValid){
      this.setState({emailStart: true});
      registration = false;
    }
    if(!this.state.nameValid){
      this.setState({nameStart: true});
      registration = false;
    }
    if(!this.state.surnameValid){
      this.setState({surnameStart: true});
      registration = false;
    }
    if(this.state.isCoach && this.state.sport=='Sport'){
      registration = false;
    }
    if(registration){
      let account = {
        login: this.state.login,
        password: this.state.password,
        email: this.state.email,
        name: this.state.name,
        surname: this.state.surname,
        sex: this.state.sex,
        isCoach: this.state.isCoach,
        sport: this.state.sport
      }
      this.props.registration(account);
    }
  }
  handleLoginClick = () => {
    this.props.history.push('/signin')
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.user.isAuthorized) {
      this.props.history.push('/profile')
    }
  }
  render(){
      return (
        <div class="container mt-5">
          <div class="col-md-6 offset-md-3">
            <div class="card">
              <div class="card-header text-center">
                <h4><Trans>Sign Up</Trans></h4>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-row ">
                    <div class="form-group col-7">
                      <label for="login"><Trans>Login</Trans></label>
                      <input name="login" id="login" class={"form-control "+this.getLoginStatus()} type="login" value={this.state.login} onChange={this.handleUserInput}/>
                      {this.state.loginStart && !this.state.loginValid?
                        this.state.loginError.map(function(ex){return(<div class="invalid-feedback">{ex}</div>);})
                      :null}
                    </div>
                    <div class="form-group col">
                      <label ><Trans>Account type</Trans></label>
                      <div class="btn-group btn-group-toggle btn-block" data-toggle="buttons">
                        <label class="btn btn-info active">
                          <input type="radio" name="accountRadioButtons" id="traineeRadioButton" onClick={this.handlerAccount} autocomplete="off" checked />
                          <Trans>Trainee</Trans>
                        </label>
                        <label class="btn btn-info">
                          <input type="radio" name="accountRadioButtons" id="coachRadioButton" onClick={this.handlerAccount} autocomplete="off"/>
                          <Trans>Coach</Trans>
                        </label>
                      </div>
                    </div>
                  </div>
                  {this.state.isCoach?
                    <div class="form-group">
                      <div class="dropdown">
                        <button class="btn btn-outline-info dropdown-toggle col-12" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.sport}
                        </button>
                        <div class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                        {
                          this.props.sport.listSports.map((item)=>{
                                  return (<button class="dropdown-item" type='button' value={item} onClick={()=>this.handlerSport(item)}>{i18n._(item)}</button>)
                          }, this)
                        }
                        </div>
                      </div>
                    </div>
                  :null}
                  <div class="form-group ">
                    <label for="email"><Trans>Email</Trans></label>
                    <input name="email" id="email" class={"form-control "+this.getEmailStatus()}  value={this.state.email} onChange={this.handleUserInput}/>
                    {this.state.emailStart && !this.state.emailValid?
                      this.state.emailError.map(function(ex){return(<div class="invalid-feedback">{ex}</div>);})
                    :null}
                  </div>
                  <div class="form-row">
                    <div class="form-group col-4">
                      <label for="name"><Trans>Name</Trans></label>
                      <input name="name" id="name" class={"form-control "+this.getNameStatus()} value={this.state.name} onChange={this.handleUserInput}/>
                      {this.state.nameStart && !this.state.nameValid?
                        this.state.nameError.map(function(ex){return(<div class="invalid-feedback">{ex}</div>);})
                      :null}
                    </div>
                    <div class="form-group col-5">
                      <label for="surname"><Trans>Surname</Trans></label>
                      <input name="surname" id="surname" class={"form-control "+this.getSurnameStatus()} value={this.state.surname} onChange={this.handleUserInput}/>
                      {this.state.surnameStart && !this.state.surnameValid?
                        this.state.surnameError.map(function(ex){return(<div class="invalid-feedback">{ex}</div>);})
                      :null}
                    </div>
                    <div class="form-group col">
                      <label><Trans>Sex</Trans></label>
                      <div class="btn-group btn-group-toggle btn-block" data-toggle="buttons">
                        <label class="btn btn-info active">
                          <input type="radio" name="sexRadioButtons" id="maleRadioButton" onClick={this.handlerSex} autocomplete="off" checked />
                          <i class="fa fa-male mr-0"></i>
                        </label>
                        <label class="btn btn-info">
                          <input type="radio" name="sexRadioButtons" id="femaleRadioButton" onClick={this.handlerSex} autocomplete="off"/>
                          <i class="fa fa-female mr-0"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password"><Trans>Password</Trans></label>
                    <input name="password" id="password" class={"form-control "+this.getPasswordStatus()} type="password" value={this.state.password} onChange={this.handleUserInput}/>
                    {this.state.passwordStart && !this.state.passwordValid?
                      this.state.passwordError.map(function(ex){return(<div class="invalid-feedback">{ex}</div>);})
                    :null}
                  </div>
                  <div class="form-group">
                    <label for="password"><Trans>Repeat password</Trans></label>
                    <input name="passwordConfirm" id="passwordConfirm" class={"form-control "+this.getPasswordConfirmStatus()} type="password" value={this.state.passwordConfirm} onChange={this.handleUserInput}/>
                    {this.state.passwordConfirmStart && !this.state.passwordConfirmValid?
                      this.state.passwordConfirmError.map(function(ex){return(<div class="invalid-feedback">{ex}</div>);})
                    :null}
                  </div>
                </form>
                {this.props.user.registrationException != null?
                  <div class="alert alert-danger pt-2 pb-2 mt-3" role="alert" >
                    <i class="fa fa-times-circle"></i>
                    {i18n._(this.props.user.registrationException)}
                  </div>
                : null}
                <div class="form-group">
                  <button class="btn btn-primary btn-block" onClick={()=>this.handleRegistration()}><Trans>Register</Trans></button>
                </div>
                <div class="form-group">
                  <a href="#" class="btn btn-success btn-block" onClick={()=>this.handleLoginClick()}><Trans>Login Sign In</Trans></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}


const mapStateToProps=(state)=>({
  sport: state.sport,
  user: state.user
})
function matchDispatchToProps(dispatch){
  return bindActionCreators(
    {
      registration: registration,
      getSports: getSports
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SignUp)
