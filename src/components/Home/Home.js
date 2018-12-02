import { Table } from 'antd';
import React, { Component } from 'react';
import  AppList  from './AppList';
import './Home.css'
import { getApp } from '../../services/getApp';
import { getBuild } from '../../services/getBuild';




const columns = [{
    title: 'appName',
    dataIndex: 'appName',
}, {
    title: 'image',
    dataIndex: 'image',
}, {
    title: 'latest',
    dataIndex: 'latest',
}];
// const data = [{
//     key: '1',
//     AppName: 'John Brown',
//     Images: 'aegis-paas.aliyun.com:5000/aenv-front:20181128-test-release-normal',
//     Latest: 'New York No. 1 Lake Park',
// }, {
//     key: '2',
//     AppName: 'Jim Green',
//     Images: 42,
//     Latest: 'London No. 1 Lake Park',
// }, {
//     key: '3',
//     AppName: 'Joe Black',
//     Images: 32,
//     Latest: 'Sidney No. 1 Lake Park',
// }];


class Home extends Component{

    constructor(){
        super()
        this.state={
            appList:[],
            data:[]
        };
    }

    componentWillMount(){
        console.log('Mount');
        const a = getApp();
        a.then(resp=>{
            console.log(resp.data.data);
            this.setState({
                'appList':resp.data.data
            })
        });

        const aa = getBuild();
        aa.then(resp=> {
            // console.log(resp.data.data);
            let data_list = [];
            resp.data.data.map((item,i) => {
                let data = {
                    "key":i+1,
                    "appName": item.fields.app_name,
                    "image": item.fields.image,
                    "latest": 'London No. 1 Lake Park'
                };
                data_list.push(data)
            });
            return data_list
        }).then((data_list)=>{
            this.setState({
                'data':data_list
            })
        })

    }

    handleQueryBuild(param){
        console.log(param.appName);
        const aa = getBuild(param.appName);
        aa.then(resp=> {
            // console.log(resp.data.data);
            let data_list = [];
            resp.data.data.map((item,i) => {
                let data = {
                    "key":i+1,
                    "appName": item.fields.app_name,
                    "image": item.fields.image,
                    "latest": 'London No. 1 Lake Park'
                };
                data_list.push(data)
            });
            return data_list
        }).then((data_list)=>{
            this.setState({
                'data':data_list
            })
        })
    }


    render(){
        return(
            <div>
                {
                    this.state.appList.map((item,i)=>
                        <AppList
                            app_name={item.fields.app_name}
                            key={i}
                            index={i}
                            onQueryBuild={index => this.handleQueryBuild(index)}
                        />
                    )
                }
                <Table columns={columns} dataSource={this.state.data} size="middle" />
            </div>
        )
    }

}
export default Home