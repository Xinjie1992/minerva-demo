import { Menu, Icon } from 'antd';
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Header.css'

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class Header extends Component {
    state = {
        current: 'home',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    componentWillMount(){
        const key = window.location.pathname.split("/")[1]||"home";
        this.setState({
            current:key,
        });
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Icon type="app" /><Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="versions" >
                    <Link to="/versions">Versions</Link>
                </Menu.Item>
                <Menu.Item key="topics" >
                    <Link to="/topics">Charts</Link>
                </Menu.Item>
                <Menu.Item key="settings" >
                    <Link to="/settings">Settings</Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header

