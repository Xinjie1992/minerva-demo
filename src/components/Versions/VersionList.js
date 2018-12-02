import { Button } from 'antd';
import React, { Component } from 'react';

class VersionList extends Component{

    render(){
        return(
            <div>
                <Button type="dashed">1.5</Button>
                <Button type="dashed">1.5.1</Button>
                <Button type="dashed">1.5.3</Button>
                <Button type="dashed">1.6</Button>
            </div>
        )
    }
}

export default VersionList