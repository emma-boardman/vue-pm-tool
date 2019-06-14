import App from './App.vue';
import TaskDetail from './components/Task/TaskDetail/TaskDetail.vue';

export const routes = [
{
	path: '/',
	name: 'home',
	component: App
},
{	path: '/task',
	name: 'home',
	component: App,
	children: [
	 { path: ':id',
	 name: 'taskDetail',
	 component: TaskDetail 
		}
	]
}];