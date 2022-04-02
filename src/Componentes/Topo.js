import '../site.css';
import logo from '../imagens/LOGO_BG.png';
import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


class Topo extends React.Component {

	render () {

		return (
			<Box display="flex" justifyContent="center" sx={{ bgcolor: '#ffffff', height: '100vh'}}>	
				<Link to="/">
					<img src={logo} width="250px" align="center"></img>
				</Link>
			</Box>
		)
	}
}

export default Topo