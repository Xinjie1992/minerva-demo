import React, { Component } from 'react';
import SettingApp from "./SettingApp";
import SettingVersion from "./SettingVersion";
import { Route, Link } from "react-router-dom";
import { Layout,Menu} from "antd";
import './Setting.css'


const { Sider } = Layout;


class Settings extends Component{

    constructor(){
        super()
        this.state={
            current:'settings'
        };
    }

    componentWillMount(){
        const key = window.location.pathname.split("/")[2]||"settings";
        this.setState({
            current:key,
        });
    }

    render(){
        return(
            <div>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[this.state.current]}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <Menu.Item key="settings" >
                                {/*<Icon type="inbox"/>*/}
                                <Link to="/settings">应用管理</Link>
                            </Menu.Item>
                            <Menu.Item key="version">
                                {/*<Icon type="tag"/>*/}
                                <Link to="/settings/version">版本管理</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Route exact path="/settings" component={SettingApp} />
                    <Route path="/settings/version" component={SettingVersion} />
                </Layout>
            </div>
        )
    }
}

export default Settings