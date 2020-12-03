import React from 'react';
import { i18n } from '@lingui/core'
import { connect } from 'react-redux'
import { setLanguage } from '../../../actions/language'
import {bindActionCreators} from 'redux'
import { Trans } from '@lingui/macro';
class LanguageSelector extends React.Component{
  handleClick=(string)=>{
    this.props.setLanguage(string)
  }
  getFlagCode=()=>{
    switch(this.props.language.language){
      case 'uk':
        return 'ua';
        break;
      case 'en':
        return 'gb';
        break;
      case 'ru':
        return 'ru';
        break;
    }
  }
  render(){
  return (
    <div className=" dropdown">
      <a className="link-white nav-link dropdown-toggle" href="#" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className={"flag flag-icon flag-icon-"+this.getFlagCode()}> </span>
      </a>
      <div className="dropdown-menu p-1" aria-labelledby="language">
      <button className="dropdown-item" onClick={()=>this.handleClick('en')}>
        <div className="dropdown d-inline-flex flex-row align-items-center">
          <div className="pr-2">
            <span className="flag flag-icon flag-icon-gb"> </span>
          </div>
          <Trans>English</Trans>
        </div>
      </button>
        <button className="dropdown-item" onClick={()=>this.handleClick('uk')}>
          <div className="dropdown d-inline-flex flex-row align-items-center">
            <div className="pr-2">
              <span className="flag flag-icon flag-icon-ua"> </span>
            </div>
            <Trans>Ukrainian</Trans>
          </div>
        </button>
        <button className="dropdown-item" onClick={()=>this.handleClick('ru')}>
          <div className="dropdown d-inline-flex flex-row align-items-center">
            <div className="pr-2">
              <span className="flag flag-icon flag-icon-ru"> </span>
            </div>
            <Trans>Russian</Trans>
          </div>
        </button>
      </div>
    </div>
  );
}
}

const mapStateToProps=(state)=>({
  language : state.language
})

function matchDispatchToProps(dispatch){
  return bindActionCreators({setLanguage: setLanguage}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(LanguageSelector)
