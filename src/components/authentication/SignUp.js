import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
class SignUp extends React.Component{
  render(){
    if(this.props.page.page=='signup'){
  return (
    <div class="container mt-5">
  <div class="col-md-4 offset-md-4">
    <div class="card">
      <div class="card-header text-center">
        <h4>Sign Up</h4>
      </div>

      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input name="email" id="email" class="form-control" type="email" />
          </div>

          <div class="form-group">
            <div class="row">
              <div class="col-3">
                <label for="password">Password</label>
              </div>

              <div class="col-9">
                <a href="#" class="float-right">forgot your password?</a>
              </div>
            </div>

            <input name="password" id="password" class="form-control" type="password" />
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block">Login</button>
          </div>
        </form>

        <p class="text-center">O</p>

        <div class="form-group">
          <a href="#" class="btn btn-success btn-block">Register</a>
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
  page: state.page
})

export default connect(mapStateToProps)(SignUp)
