import App from '../pages/App/App';
import SimpleTable from '../pages/SimpleTable';
import CloundFireStoreTest from '../pages/CloundFireStoreTest';
import Login from '../pages/Login';
import NavbarAdmin from '../components/NavbarAdmin';

const routes = [
    { path: '/', name: 'NavbarAdmin', component: NavbarAdmin },
    { path: '/table', name: 'SimpleTable' , component: SimpleTable }
];

export default routes;