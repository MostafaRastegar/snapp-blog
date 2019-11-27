/**
 *
 * SnappFooter
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../actions/modals';
// import {getAppInit} from '../../api/global';
import {addToast} from '../../actions/notifications';
import SnappNotification from '../../components/snappNotification';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class SnappFooter extends React.Component {
	spyLogger = () => {
		const consoleSpy = `
		.d8888. d8b   db  .d8b.  d8888b. d8888b.      d8888b. db       .d88b.   d888b  
		88'  YP 888o  88 d8' '8b 88  '8D 88  '8D      88  '8D 88      .8P  Y8. 88' Y8b 
		'8bo.   88V8o 88 88ooo88 88oodD' 88oodD'      88oooY' 88      88    88 88      
		  'Y8b. 88 V8o88 88~~~88 88~~~   88~~~        88~~~b. 88      88    88 88  ooo 
		db   8D 88  V888 88   88 88      88           88   8D 88booo. '8b  d8' 88. ~8~ 
		'8888Y' VP   V8P YP   YP 88      88           Y8888P' Y88888P  'Y88P'   Y888P  
	 `;
	  console.log(consoleSpy);
	}

  componentDidMount() {
		this.spyLogger();
    // this.props.showModal({
    //   UserPositionModal: false,
    //   alertExp: false,
    //   successChangePassModal: false,
    //   trackingModal: false,
    //   isVerifyModal: false,
    //   verifyModal: false,
    // });
  }



  render() {
    return (
      <React.Fragment>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
        </div>
      </footer>

       <div className="container-fluid snapp-footer__notification topM10 top">
          <SnappNotification/>
        </div>
      </React.Fragment>
    );
  }
}



const mapStateToProps = state => ({
  notification:state.Notification,
  auth:state.Auth,
  location:state.router.location.pathname
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
  showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SnappFooter);