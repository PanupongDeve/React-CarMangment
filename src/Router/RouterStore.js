import App from '../pages/App/App';
import SimpleTable from '../pages/SimpleTable';
import CloundFireStoreTest from '../pages/CloundFireStoreTest';
import Login from '../pages/Login';
import Users from '../pages/Users';
import Products from '../pages/Products';


const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/table', name: 'SimpleTable' , component: SimpleTable },
    { path: '/users', name: 'Users' , component: Users },
    { path: '/products', name: 'Products' , component: Products}
];

export default routes;