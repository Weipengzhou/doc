import React,{Component} from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link,Route} from 'react-router-dom'
import styles from './Slider.module.css' 
import Index from '../../Containers/Index/Index'
import Analysis from '../../Containers/Analysis/Analysis'
const { Sider, Content } = Layout;
class Slide extends Component{
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }
   render(){
       return (
        <div style={{'minHeight':'100%'}}>
          <Layout style={{"minHeight":"100%"}}>
            <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            >
            <div className={styles.logo} />
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1">
                <Link to='/'>
                <Icon type="user"/>
                <span>医生名单</span>
                </Link>
                </Menu.Item>
                <Menu.Item key="2">
                <Link to='/Analysis'>
                <Icon type="video-camera" />
                <span>分析</span>
                </Link>
                </Menu.Item>
            </Menu>
            </Sider>
            <Layout>
            <Content style={{ margin: '0 16px', padding: 24, background: '#fff', minHeight:800,}}>
                <Route path='/' exact component={Index} />
                <Route path='/Analysis' component={Analysis} />

            </Content>
            </Layout>
         </Layout> 
        </div>
       )
   }
}

export default Slide;