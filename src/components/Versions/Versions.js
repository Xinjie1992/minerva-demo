import React, { Component } from 'react';
import { Input } from 'antd';
import './VersionList'
import VersionList from "./VersionList";
import './Version.css'


const { TextArea } = Input;


class Versions extends Component{

    render(){
        return(
            <div>
                <VersionList/>
                <div className='version_show'>
                    <TextArea placeholder="imageList" autosize />
                </div>
                <div style={{ margin: '24px 0' }} />
            </div>
        )
    }
}

export default Versions