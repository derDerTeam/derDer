// import Register from "@/views/Register";

const Login = () => import('@/views/Login');
const Register = () => import('@/views/Register');


export default [
	{
		path: "/login",
		component: Login
	},{
		path: "/register",
		component: Register
	}
]