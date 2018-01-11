import './notification.css';
import React from 'react';
export default class Notification extends React.Component {
  constructor(props){
    super(props);
    this.config = props.config || {};
    this.showOrHide = this.showOrHide.bind(this);
    this.onCloseHandler = this.onCloseHandler.bind(this);
    this.config.delay = (this.config.delay) ? this.config.delay : 3000;
    this.config.isAutoClose = this.config.isAutoClose || false;
    this.state = {
      unMount: false
    }; 
  }

  componentDidMount() {
    if(this.config.isAutoClose) {
      setTimeout(() => {
        this.onCloseHandler(null);
      }, this.config.delay);
    }
  }

  componentDidUpdate() {
    this.config = null;
    this.setState(null);
    this.props = null;
  }

  onCloseHandler(evt) {
    this.setState({unMount: true});
    if(this.props.onCloseHandler) {
      this.props.onCloseHandler(evt);
    };
  }

  showOrHide() {
    return (
      <div className={`content ` + this.config.type}>
        <div className="textArea">
          <i className={`fa ` + this.config.icon}
            aira-hidden="true"></i>
          <p dangerouslySetInnerHTML={{__html: this.config.message }}>
          </p>
        </div>
        <div className="controls" onClick={this.onCloseHandler}>
          <i className="fa fa-close" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
  render() {
    let dom = (!this.state.unMount) ? this.showOrHide() : null;
    return dom;
  }

}