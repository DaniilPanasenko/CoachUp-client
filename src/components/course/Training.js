import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Trans } from '@lingui/macro';
import { i18n } from '@lingui/core'

class Training extends React.Component{

  handleClick = () => {
    this.props.history.push('/training/'+this.props.trainingId);
  }

  render(){
      return (
        <div class="container mt-3">
          <button type="button"
                  class="shadow btn btn-outline-info btn-lg btn-block"
                  onClick={this.handleClick}>
            <div class="row mt-1">
              <h3 class="col-9 text-left">
                {this.props.name}
              </h3>
            </div>
          </button>
        </div>
      );
  }
}

export default Training;
