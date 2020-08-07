/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Erro ao sair')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode} style={{ backgroundColor:'black'}}>
        <Menu.Item key="mail">
          <a href="/login" style={{color:'white'}}>Entrar</a>
        </Menu.Item>
        <Menu.Item key="app" style={{ backgroundColor:'black'}}>
          <a href="/register" style={{color:'white'}}>Cadastrar</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode} style={{ backgroundColor:'black'}}>

        <Menu.Item key="history">
          <a href="/history" style={{color:'white'}}>Histórico</a>
        </Menu.Item>

        <Menu.Item key="upload" >
          <a href="/product/upload" style={{color:'white'}}>Adicionar</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -22 , color:'white'}}>
              <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
            </a>
          </Badge>
        </Menu.Item>


        <Menu.Item key="logout">
          <a onClick={logoutHandler} style={{color:'white'}}>Sair</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

