import '../site.css';
import React from 'react'
import logo from '../imagens/LOGO_BG.png';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';


class Topo extends React.Component {

	render () {

		return (
			<Box display="flex" justifyContent="center" sx={{ bgcolor: '#ffffff', my: '20px'}}>	
				<Link to="/">
					<img src={logo} width="250px" align="center" alt="Logo BG"></img>
				</Link>
			</Box>
		)
	}
}

export default Topo