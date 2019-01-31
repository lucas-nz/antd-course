export default{
    routes: [{
        path: '/',
        component: '../layout',
        routes: [{
            path: '/',
            component: './App'
        },{
          path: '/app',
          component: './App'
        }]
    }],
    plugins: [
        ['umi-plugin-react', {
            antd: true
        }]
    ]
};