import React from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<UserItem />
			</div>
		);
	}
}

export default App;
