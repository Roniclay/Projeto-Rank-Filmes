// Aqui estamos importando a biblioteca React para renderizar os componentes React
import React from 'react'
// Aqui temos a importação do react dom que permite injetar os componentes na arvore DOM
import ReactDOM from 'react-dom/client'
// Temos o browserRouter que utiliza a API de historico do navegador para manter a sincronização
//entre a URL atual e a exibição do componente correspondente.
//O Routes é um componente do react-router-dom que define as rotas disponíveis em sua aplicação. 
//Ele permite mapear URLs para componentes específicos que serão renderizados quando a rota correspondente for acessada.
//O Route é um componente do react-router-dom que define uma rota específica. Ele mapeia uma rota para um componente específico
// que será renderizado quando a URL corresponder à rota definida.
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Baixo estamos importando nossos componentes criados
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import './index.css'


//O método createRoot() é usado para criar uma raiz de renderização React. 
//Ele retorna um objeto que representa essa raiz de renderização, permitindo que você chame métodos como render() nele.
//Geralmente, o elemento com ID 'root' é onde o aplicativo React será renderizado na página.
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode> é um componente especial fornecido pelo pacote react que ajuda a destacar possíveis 
  //problemas no código e adverte sobre práticas desatualizadas durante o desenvolvimento do aplicativo React. 
  <React.StrictMode>
    <BrowserRouter>
     {/*Este componente também é fornecido pelo pacote react-router-dom e é usado para definir as rotas 
     disponíveis em sua aplicação. Ele envolve uma coleção de rotas. */} 
      <Routes>
        {/*Este componente é usado para definir uma rota específica. Ele recebe várias propriedades, 
        incluindo path e element. A propriedade path especifica o caminho da URL a ser mapeado 
        para o componente especificado em element. */} 
        <Route element={<App/>}>
          <Route path='/' element={<Home />}/>
          <Route path='movie/:id' element={<Movie />}/>
          <Route path='search' element={<Search />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
