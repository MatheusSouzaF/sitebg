import '../site.css';
import Topo from '../Componentes/Topo'
import Conteudo from '../Componentes/Home/Conteudo'
import ConteudoAux from '../Componentes/Home/ConteudoAux'
import Carousel from '../Componentes/Home/Carousel'
import Rodape from '../Componentes/Rodape'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

const theme = createTheme();

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={false}>
        <header>
          <Topo />
        </header>
        <Container>
          <main>

          </main>
        </Container>
        <footer>
          <Rodape />
        </footer>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
