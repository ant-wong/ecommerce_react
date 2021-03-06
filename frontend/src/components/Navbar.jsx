import React, { Component } from 'react'
import styled from 'styled-components';
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
const Header = Layout
// const SubMenu = Menu.SubMenu
// const MenuItemGroup = Menu.ItemGroup

// STYLED COMPONENTS
const Title = styled.h1`
  font-size: 3em;
  font-family: 'Economica', sans-serif;
  text-align: center;
  color: palevioletred;
`
const Nav = styled(Header)`
  position: fixed;
  width: 100%;
`

export default class Navbar extends Component {
  state = {
    current: 'home',
  }
  
  // HANDLERS
  handleClick = (ev) => {
    this.setState({
      current: ev.key
    })
  }
  
  render() { 
    return (
      <Nav>
        <Title>MY STORE</Title>
        <Menu 
          mode="horizontal"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}>
          <Menu.Item key="home">
            <Link to="/">
            <Icon type="smile-o" />
            HOME
            </Link>
          </Menu.Item>
          <Menu.Item key="store">
            <Link to="/store">
            <Icon type="appstore" />
            STORE
            </Link>
          </Menu.Item>
          <Menu.Item key="cart">
          <Link to="/cart">
            <Icon type="shopping-cart" />
            CART
            </Link>
          </Menu.Item>
          <Menu.Item key="signIn">
          <Link to="/signin">
            <Icon type="heart-o" />
            SIGN IN
            </Link>
          </Menu.Item>
        </Menu>
      </Nav>
    )
  }
}