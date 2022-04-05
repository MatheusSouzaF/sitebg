import React from 'react'

// Material UI
import { createTheme } from '@mui/material/styles';

const temaPrincipal = createTheme({
	typography: {
	  titulo: {
		fontSize: 45,
		fontFamily: 'Montserrat-ExtraBold, sans-serif',
	  },
	  subtitulo: {
		fontSize: 32,
		fontFamily: 'Montserrat, sans-serif'
	  },
	  subtituloBold: {
		fontSize: 33,
		fontFamily: 'Montserrat-Bold, sans-serif'
	  },
	  subtituloBoldPequeno: {
		fontSize: 20,
		fontFamily: 'Montserrat-Bold, sans-serif'
	  },
	  textoPrincipal: {
		fontSize: 18,
		fontFamily: 'Montserrat, sans-serif'
	  },
	  rodape : {
		fontFamily: 'Montserrat, sans-serif',
		color: '#ffffff'
	  }

	},
});

export default  temaPrincipal
