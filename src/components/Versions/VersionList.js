import { Collapse } from 'antd';
import React, { Component } from 'react';
import {getVersion} from "../../services/getVersion";

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
    background: '#f7f7f7',
    borderRadius: 4,
    marginBottom: 24,
    border: 0,
    overflow: 'hidden',
};



class VersionList extends Component{

    constructor(){
        super()
        this.state={
            versionList:[],
            data:[]
        };
    }

    componentWillMount(){
        console.log('Mount');
        const a = getVersion();
        a.then(resp=>{
            console.log(resp.data.data);
            this.setState({
                'versionList':resp.data.data
            })
        });
    }

    render(){
        return(
            <Collapse bordered={false} defaultActiveKey={['0']}>
                {
                    this.state.versionList.map((item,i)=>
                        <Panel header={item.fields.version} key={i} style={customPanelStyle}>
                            <p>{text}</p>
                        </Panel>
                    )
                }

            </Collapse>
        )
    }
}

export default VersionList