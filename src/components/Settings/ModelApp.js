import React, { Component } from 'react';
import {Input, Modal, message, Icon,Tooltip} from 'antd';
import { addApp } from '../../services/addApp';

class ModelApp extends Component{

    constructor(){
        super();
        this.state={
            visible: false,
            appName:''
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        if (this.state.appName.match(/^[ ]*$/)) return message.error('请输入应用名！');
        const a = addApp(this.state.appName);
        a.then(resp=>{
            if(resp.data.data.hasError === 'true'){
                return message.error(resp.data.data.message);
            }else{
                this.setState({
                    visible: false,
                });
                if(this.props.onAddApp){
                    const newApp = {
                        "key":resp.data.data.message.id,
                        "id":resp.data.data.message.id,
                        "appName":resp.data.data.message.app_name
                    };
                    this.props.onAddApp(newApp)
                }
                return message.success('新增应用成功！');
            }
        })
    }

    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }

    handleChangeApp(e){
        this.setState({
            'appName':e.target.value
        })
    }

    render(){
        return(
            <div>
                <p>应用列表：
                <Tooltip title="新增应用">
                    <Icon type="plus-square" theme="twoTone" onClick={this.showModal} style={{cursor:'pointer'}}/>
                </Tooltip>
                </p>
                <Modal
                    title="新增应用"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>请输入应用名：</p>
                    <Input placeholder="" onBlur={this.handleChangeApp.bind(this)}/>
                </Modal>
            </div>
        )
    }
}
export default ModelApp
