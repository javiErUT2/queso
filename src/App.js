import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tablaa from './componentes/Tablaa';

function App() {
  return (
    <BrowserRouter>
      <Routes>



        <Route path="/Tablaa" element={<Tablaa />} />


      </Routes>
    </BrowserRouter>
  );
}
export default App;
