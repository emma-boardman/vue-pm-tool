import App from './App.vue';
import Layout from './containers/Layout';
import Auth from './containers/Auth';

export const routes = [
{
	path: '',
	name: 'home',
	component: Auth
},
{	path: '/pm',
	name: 'pm',
	component: Layout,
	props: { user: 'pm', view: 'calendar'}
},
{	path: '/client',
	name: 'client',
	component: Layout,
	props: { user: 'client', view: 'calendar'}
},
{	path: '/pm-unscheduledtasks',
	name: 'pm-unscheduledtasks',
	component: Layout,
	props: { user: 'pm', view: 'ust' }
},
{	path: '/client-unscheduledtasks',
	name: 'client-unscheduledtasks',
	component: Layout,
	props: { user: 'client', view: 'ust' }
}
];