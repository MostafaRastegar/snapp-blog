import React from 'react';
// import CardBox from 'components/CardBox';
import './ErrorHandler.scss';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Page404 from '../../containers/Page404';
import icon from '../../images/icons/search_no_result.png';

const ErrorHandlerUI = (props) => {
    return (
        <div className="main-container">
        <div className="order-empty hFull center">
        <div className="order">
          <div className="order-empty__icon bottomP15">
            <img className="order-empty__img" src={icon} alt=""/>
            <span className="order-empty__title">لطفا دوباره تلاش کنید</span>
          </div>
          <div className="error-links" style={{
                  display: 'flex',
                  flexDirection: 'column'
            }}>
            <Button onClick={props.backToDashboard} color={'primary'}>
                بازگشت به صفحه اصلی
            </Button>
        </div>
        </div>
      </div>
      </div>
    );
};

class ErrorHandler extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            componentCrashed: false,
        };
    }

    componentDidCatch (error, errorInfo) {
        this.setState({
            componentCrashed: true,
        });
    }

    dashboardButtonClick () {
        this.setState({
            componentCrashed: false,
        }, () => {
            window.location.replace('/');
            // this.props.history.push('/');
        });
    }

    render () {
        if(this.props.notFound.show){
            return <Page404 />
        }
        if (this.state.componentCrashed) {
            return <ErrorHandlerUI backToDashboard={this.dashboardButtonClick.bind(this)}/>;
        }

        return this.props.children;
    }
}

const mapStateToProps = state => ({
    notFound: state.NotFound,
});
export default withRouter(connect(mapStateToProps)(ErrorHandler));