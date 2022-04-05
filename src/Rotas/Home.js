import '../site.css';
import Topo from '../Componentes/Topo'
import Conteudo from '../Componentes/Home/Conteudo'
import ConteudoAux from '../Componentes/Home/ConteudoAux'
import CarouselPag from '../Componentes/Home/Carousel'
import Rodape from '../Componentes/Rodape'
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import tema from '../Componentes/Tema'



function Home() {
  	return (
    <ThemeProvider theme={tema}>
      	<CssBaseline />
        <Topo />
		<Container maxWidth='xl'>
			<Conteudo />
		</Container>
        <ConteudoAux />
        <CarouselPag />
        <Rodape />
    </ThemeProvider>
  	);
}

 export default Home;
