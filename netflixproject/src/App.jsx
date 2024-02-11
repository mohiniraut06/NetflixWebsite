import {BrowserRouter,Routes,Route} from "react-router-dom"
import Row from './Project8Netflix/Row'
import requests from './Project8Netflix/Request'
import Banner from './Project8Netflix/Banner'
import Movie from './Project8Netflix/Movie'
import Cast from './Project8Netflix/Cast'
import './App.css'
const App = () => {
   return (
      <div className='App'>
         <BrowserRouter>
         <Routes>
            <Route path="/" element={
               <>
               <Banner/>
               <Row isLargeRow title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
               <Row title="TopRated Movies" fetchUrl={requests.fetchTopRated}></Row>
               <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
               <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
               <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
               <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
               <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}></Row>
               </>
            }>
            </Route>
            <Route path='/movie' element={<Movie/>}></Route>
            <Route path='/cast' element={<Cast/>}></Route>

         </Routes>
         </BrowserRouter>
      </div>
   )
}
export default App