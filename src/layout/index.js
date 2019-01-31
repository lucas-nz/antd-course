import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

// Header, Footer, Sider, Content 模块在 Layout 组件下
const { Header, Footer, Sider, Content } = Layout;

// 引入菜单子组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component{
    render() {
        return(
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    
                </Sider>
                <Layout >
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2019 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout;