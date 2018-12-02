import { Button } from 'antd';
import React, { Component } from 'react';

class AppList extends Component{

    handleClickButton(event){
        if (this.props.onQueryBuild) {
            // console.log(event.target.innerText);
            // const appName = event.target.innerText;
            this.props.onQueryBuild({
                'index':this.props.index,
                'appName':event.target.innerText
                });
        }
    }


    render(){
        return(
                <Button type="dashed" onClick={this.handleClickButton.bind(this)}>{this.props.app_name}</Button>
        )
    }
}

export default AppList