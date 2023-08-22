import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './componant/Header' 
import { Route, Routes } from 'react-router-dom';
import CardDetail from './componant/CardDetail'
import Card from './componant/CardShow'

function App() {
  return (
    <>
    <Headers/>
    <Routes>
      <Route path='/' element={<Card/> }/>
      <Route path='/card/:id' element={<CardDetail/> }/>
    </Routes>
    </>
  );
}

export default App;
