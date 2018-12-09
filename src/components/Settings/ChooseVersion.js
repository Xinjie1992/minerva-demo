import React, { Component } from 'react';
import { Transfer } from 'antd';
import {getBuild} from "../../services/getBuild";



class ChooseVersion extends Component{

    state = {
        mockData: [],
        targetKeys: [],
    }

    componentDidMount() {
        this.getMock();
    }

    getMock = () => {
        const targetKeys = [];
        const mockData = [];
        const aa = getBuild('&versionId='+this.props.transVersionId);
        aa.then(resp => {
            console.log(resp.data.data);
            resp.data.data.map((item) => {
                const data = {
                    key: item.id,
                    title: item.image,
                    description: "",
                    chosen: false,
                    // imageId:item.id,
                };
                if (item.selected) {
                    targetKeys.push(data.key);
                }
                mockData.push(data);
                return data
            });
        }).then(() => {
            this.setState({
                mockData: mockData,
                targetKeys: targetKeys,
            });
            if(this.props.onReciveData){
                this.props.onReciveData(targetKeys);
            }
        });
    };

    handleChange = (targetKeys, direction, moveKeys) => {
        console.log(targetKeys, direction, moveKeys);
        this.setState({targetKeys});
        if(this.props.onReciveData){
            this.props.onReciveData(targetKeys);
        }
    };

    renderItem = (item) => {
        const customLabel = (
            <span className="custom-item">
        {item.title}
      </span>
        );

        return {
            label: customLabel, // for displayed item
            value: item.title, // for title and filter matching
        };
    };

    render()
    {
        return (
            <Transfer
                dataSource={this.state.mockData}
                listStyle={{
                    width: 400,
                    height: 400,
                }}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange}
                render={this.renderItem}
            />
        );
    }
}
export default ChooseVersion