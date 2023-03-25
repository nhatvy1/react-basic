import React from 'react'
import logo from './logo.svg'
import './App.scss'	
import MyComponent from './Example/MyComponent'
import ListTodo from './Todos/ListTodo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Navigation/Nav';
import Home from './Example/Home';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


const App = () => {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<Nav />

					<img src={logo} className="App-logo" alt="logo" />
					{/* <Home /> */}
					{/* <ListTodo /> */}

					

					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/todo">
							<ListTodo />
						</Route>
						<Route path="/about">
							<MyComponent />
						</Route>
						<Route path="/user" exact>
							<ListUser />
						</Route>
						<Route path="/user/:id">
							<DetailUser />
						</Route>
					</Switch>



					<ToastContainer
						position="top-right"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
				</header>
			</div>
		</Router>

	)
}

export default App;
