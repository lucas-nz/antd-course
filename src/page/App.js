import { Card } from 'antd';
import Clock from './Clock.js'


export default () => {
    
    const style = {
        width: '400px',
        margin: '30px',
        // boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8',        
    };
    
    const onTextChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
            <Card style={ style } actions={[<a>操作1</a>, <a>操作2</a>]} hoverable>
                <Card.Meta 
                    avatar={
                    <img alt="" 
                        src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
                        style={{ width: '64px', height: '64px', borderRadius: '32px' }}
                    />}
                    title="Alipay"
                    description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
                />
            </Card>
        </div>            
    );
}   