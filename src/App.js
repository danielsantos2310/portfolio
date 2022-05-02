import logo from './logo.svg';
import './App.scss';
import {Routes} from 'react-router-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Index';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
    </>

  );
}

export default App;
