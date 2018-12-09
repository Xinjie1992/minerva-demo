import React, { Component } from 'react';
import './Setting.css'
import {Layout,Table} from 'antd';
import ModelApp from './ModelApp';
import {getApp} from "../../services/getApp";


const { Content } = Layout;

const columns = [{
    title: 'id',
    dataIndex: 'id',
}, {
    title: 'appName',
    dataIndex: 'appName',
}];



class SettingApp extends  Component{

    constructor(){
        super();
        this.state={
            appList:[]
        };
    }

    componentWillMount() {
        console.log('Mount');
        const a = getApp();
        a.then(resp=> {
            // console.log(resp.data.data);
            let data_list = [];
            resp.data.data.map((item,i) => {
                let data = {
                    "key":i+1,
                    "id":item.pk,
                    "appName": item.fields.app_name,
                };
                data_list.push(data)
                return data
            });
            return data_list
        }).then((data_list)=>{
            this.setState({
                'appList':data_list
            })
        });
    }

    handleAddApp(mes){
        const appList = this.state.appList;
        appList.push(mes);
        this.setState({
            'appList':appList
        });
    }

    render(){
        return(
            <Layout style={{ padding: '0 24px 24px',background: '#fff' }}>
                <div style={{padding:'5px 24px'}}>
                    <ModelApp onAddApp={mes => this.handleAddApp(mes)}/>
                </div>
                <Content style={{
                    background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}
                >
                    <Table columns={columns} dataSource={this.state.appList} size="small" />
                </Content>
            </Layout>
        )
    }
}

export default SettingApp