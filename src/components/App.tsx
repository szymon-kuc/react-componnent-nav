import React from 'react';
// import logo from '../assets/podpis-1.jpg';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from './Nav';

import '../assets/style.scss';

const App = () => {
    return(
		<Router>
			<Nav />
		</Router>
	);
}

export default App;