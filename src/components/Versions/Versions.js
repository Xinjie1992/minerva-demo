import React, { Component } from 'react';
import './VersionList'
import VersionList from "./VersionList";
import './Version.css'




class Versions extends Component{

    render(){
        return(
            <div>
                <VersionList/>
            </div>
        )
    }
}

export default Versions