import React, { Component } from 'react';
import {Modal, Button, Icon,Tooltip} from 'antd';
import ChooseVersion from "./ChooseVersion";
import {setVersion} from "../../services/setVersion";


class  ModeSetVersion extends Component{
    constructor(props) {
        super(props);
        this.state={
            loading: false,
            visible: false,
            nowKeys:[],

        }
    }

    // 对话框---版本选择app
    showModal = () => {
        this.setState({
            visible: true,
        });
        // 获取当前的versionId
        if(this.props.record){
            this.setState({
                nowVersionId:this.props.record
            });
        }
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
        const data = {
            "appId":this.state.nowKeys,
            "versionId":this.state.nowVersionId
        };
        console.log(data);
        const a = setVersion(data);
        a.then(resp=> {

            // 注释
            console.log(resp.data.data);
        });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    hangdleDealData(mes){
        console.log("回调");
        console.log(mes);
        this.setState({
            nowKeys:mes
        })
    }

    render(){
        const { visible, loading } = this.state;
        return(
            <div>
                <Tooltip title="编辑">
                    <Icon type="edit" theme="twoTone" style={{cursor:'pointer'}} onClick={this.showModal}/>
                </Tooltip>
                <Modal
                    visible={visible}
                    title="版本设置"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={900}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            确定
                        </Button>,
                    ]}
                >
                    <p>  请为版本关联镜像</p>
                    <ChooseVersion onReciveData={this.hangdleDealData.bind(this)} transVersionId={this.state.nowVersionId}/>
                </Modal>
            </div>
        )
    }
}
export default ModeSetVersion