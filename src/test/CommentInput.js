import React, { Component } from 'react'
import { Input,Button } from 'antd';


class CommentInput extends  Component{

    constructor(){
        super()
        this.state={
            username:"",
            content:""
        }
    }

    componentDidMount = () =>{
        this.Input.focus()
    }

    componentWillMount () {
        this._loadUsername()
    }

    _saveUsername = username => {
        localStorage.setItem('username', username)
    }

    _loadUsername = () =>{
        if (localStorage.getItem('username')) {
            this.setState({ 'username':localStorage.getItem('username') })
        }
    }

    handleUsernameChange = event =>{
        this.setState({
            username:event.target.value
        })
    }

    handleContentChange = event =>{
        this.setState({
            content:event.target.value
        })
    }

    handleSubmit = () =>{
        if (this.props.onSubmit){
            const {username,content} = this.state
            const createdTime = new Date()
            this.props.onSubmit({username,content,createdTime})
            this.setState({
                content:""
            })
        }
    }

    handleUsernameBlur = event =>{
        this._saveUsername(event.target.value)
    }

    render(){
        return(
            <div>
                <div className="Input_div">
                    <span>用户名：</span>
                    <Input placeholder="请输入用户名" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}/>
                </div>
                <div className="Input_div">
                    <span>评论内容：</span>
                    <Input placeholder="请输入评论内容" value={this.state.content} onChange={this.handleContentChange.bind(this)} ref={(Input) => this.Input = Input}/>
                </div>
                <div className="Input_div">
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>发布</Button>
                </div>
            </div>
        )
    }
}

export default CommentInput