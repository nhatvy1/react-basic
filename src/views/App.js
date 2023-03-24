import React from 'react'
// import logo from './logo.svg'
import './App.scss'	
// import MyComponent from './Example/MyComponent'
import ListTodo from './Todos/ListTodo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<div className="App">
			{/* <MyComponent /> */}
			<ListTodo />

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
		</div>

	)
}

export default App;
