import App from '../pages/App/App';
import SimpleTable from '../pages/SimpleTable';
import CloundFireStoreTest from '../pages/CloundFireStoreTest';
import Login from '../pages/Login';

const routes = [
    { path: '/', name: 'Login', component: Login },
    { path: '/table', name: 'SimpleTable' , component: SimpleTable }
];

export default routes;