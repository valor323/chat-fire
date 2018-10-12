import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMessages} from '../actions'

class Chat extends Component{

    componentDidMount(){
        this.props.getMessages();
    }
    render(){
        return (
            <div>
                <h1 className="center">Chat Room</h1>
            </div>
        );
    }
}

export default connect(null, {
    getMessages: getMessages
})(Chat);
