import React, { Component } from 'react';
import { Input,Modal,Button,message } from 'antd';
import { addApp } from '../../services/addApp';

class Model extends Component{

    state = { visible: false,appName:'' }

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
                <Button type="dashed" onClick={this.showModal}>
                    添加应用
                </Button>
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
export default Model
