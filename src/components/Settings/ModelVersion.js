import React, { Component } from 'react';
import {Input, Modal, message, Icon,Tooltip} from 'antd';
import { addVersion } from '../../services/addVersion';

class ModelVersion extends Component{

    constructor(){
        super()
        this.state={
            visible: false,
            appName:''
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        if (this.state.appName.match(/^[ ]*$/)) return message.error('请输入版本号！');
        const a = addVersion(this.state.appName);
        a.then(resp=>{
            if(resp.data.data.hasError === 'true'){
                return message.error(resp.data.data.message);
            }else{
                this.setState({
                    visible: false,
                });
                if(this.props.onAddVersion){
                    const newVersion = {
                        "key":resp.data.data.message.id,
                        "id":resp.data.data.message.id,
                        "version":resp.data.data.message.version
                    };
                    this.props.onAddVersion(newVersion);
                }
                return message.success('新建版本成功！');
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
                <p>版本列表：
                    <Tooltip title="新建版本">
                        <Icon type="plus-square" theme="twoTone" onClick={this.showModal} style={{cursor:'pointer'}}/>
                    </Tooltip>
                </p>
                <Modal
                    title="新建版本"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>请输入版本号：</p>
                    <Input placeholder="" onBlur={this.handleChangeApp.bind(this)}/>
                </Modal>
            </div>
        )
    }
}
export default ModelVersion
