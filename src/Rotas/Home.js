import '../site.css';
import Topo from '../Componentes/Topo'
import Conteudo from '../Componentes/Home/Conteudo'
import ConteudoAux from '../Componentes/Home/ConteudoAux'
import Carousel from '../Componentes/Home/Carousel'
import Rodape from '../Componentes/Rodape'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Montserrat from '../Fontes/Montserrat-Regular_0.ttf'
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    palette: {
      primary: {
        main: '#383330',
      },
      secondary: {
        main: '#e5b54a'
      }
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          src: "local('Montserrat'), url(${Montserrat});
        }
      `,
    }
  }
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <header>
          <Topo />
        </header>
        <main>
          <Container maxWidth='xl'>
            <Conteudo />

          </Container>
          <ConteudoAux />
          <Carousel />
        </main>
        <footer>
          <Rodape />
        </footer>
    </ThemeProvider>
  );
}

export default Home;
