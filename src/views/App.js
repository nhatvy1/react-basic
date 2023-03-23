import React from 'react'
import logo from './logo.svg'
import './App.scss'
import MyComponent from './Example/MyComponent'

function formatName(user) {
	return user.firstName + " "+  user.lastName
}

const user = {
	firstName: 'Vy',
	lastName: 'Huynh'
}

const App = () => {
	return (
	<div className="App">
		<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
			Hello world with ReactJS Hỏi Dân IT
		</p>
		<h1>Xin chao { formatName(user) }</h1>
		<MyComponent />
		<a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
		</a>
		</header>
	</div>
	)
}

export default App;
