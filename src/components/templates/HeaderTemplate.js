import React, {Component} from "react";
import {NavLink} from 'react-router-dom';
import {Dropdown, Icon, Layout, Menu} from "antd";
import logo from '../../../assets/images/logo-login.png'
const { Header} = Layout;

class HeaderTemplate extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        this.setState({

        })
    }
    render() {
        const menu = (
            <Menu
            >
                <Menu.Item key="profile">
                    <NavLink to="/profile">Account Setting</NavLink>
                </Menu.Item>
                <Menu.Item key="log-out">
                    <NavLink to="/log-out">Log out</NavLink>
                </Menu.Item>
            </Menu>
        );
        return (
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: "64px" }}
                >
                    <Menu.Item style={{width: '150px'}}>
                        <NavLink to="/" style={{float: 'left'}}>
                            <img style={{width: '100%'}} src={logo}/>
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="users">
                        <NavLink to="/users">Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key="services">
                        <NavLink to="/products">Services</NavLink>
                    </Menu.Item>
                    <Menu.Item key="questions">
                        <NavLink to="/questions">Questions</NavLink>
                    </Menu.Item>
                    <Menu.Item key="works">
                        <NavLink to="/works">Works</NavLink>
                    </Menu.Item>
                    <Dropdown overlay={menu} placement='bottomCenter'>
                        <NavLink to="#" style={{float: 'right'}}>
                            Pham Duc Anh<Icon type="down" />
                        </NavLink>
                    </Dropdown>
                </Menu>
            </Header>
        );
    }
}

export default HeaderTemplate;
