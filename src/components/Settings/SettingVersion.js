import React, { Component } from 'react';
import './Setting.css'
import {Layout,Table} from 'antd';
import ModelVersion from "./ModelVersion";
import {getVersion} from "../../services/getVersion";
import ModeSetVersion from "./ModeSetVersion"

const { Content } = Layout;
const columns=[{
        title: 'id',
        dataIndex: 'id',
    }, {
        title: 'version',
        dataIndex: 'version',
    },{
        title: '',
        dataIndex: 'action',
        width:100,
        render:(record) => (
            <ModeSetVersion record={record}/>
        ),
    }];

class SettingVersion extends  Component{


    constructor(){
        super();
        this.state={
            versionList:[],

        };
    }

    componentWillMount() {
        console.log('Mount');
        const a = getVersion();
        a.then(resp=> {
            // console.log(resp.data.data);
            let data_list = [];
            resp.data.data.map((item,i) => {
                let data = {
                    "key":i+1,
                    "id":item.pk,
                    "version": item.fields.version,
                    "action":item.pk,
                };
                data_list.push(data);
                return data_list
            });
            return data_list
        }).then((data_list)=>{
            this.setState({
                versionList:data_list,
            });
        });
    }

    handleAddVersion(mes){
        const versionList = this.state.versionList;
        versionList.push(mes);
        console.log(versionList);

        this.setState({
            'versionList':versionList
        });
    }


    render(){
        return(
            <Layout style={{ padding: '0 24px 24px',background: '#fff' }}>
                <div style={{padding:'5px 24px'}}>
                    <ModelVersion onAddVersion={mes => this.handleAddVersion(mes)}/>
                </div>
                <Content style={{
                    background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}
                >
                    <Table columns={columns} dataSource={this.state.versionList} size="small" />
                </Content>
            </Layout>
        )
    }
}

export default SettingVersion