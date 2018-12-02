import React, { Component } from 'react'
import { Divider } from 'antd';

class Comment extends Component{

    constructor () {
        super()
        this.state = { timeString: '' }
    }

    componentWillMount () {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount () {
        clearInterval(this._timer)
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (Date.now() - Date.parse(this.props.comment.createdTime)) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    handleDeleteComment(){
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    render(){
        return(
            <div>
                <div>
                    <span className="username">{this.props.comment.username}</span>
                    <span>：</span>
                    <span className="content">{this.props.comment.content}</span>
                    <div className='comment-createdtime'>
                        <span>{this.state.timeString} || </span>
                        <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
                    </div>
                </div>
                <Divider/>
            </div>

        )
    }
}

export default Comment