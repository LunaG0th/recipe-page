// import viteLogo from '/vite.svg'
import Home from './Pages/Home';
import Footer from './components/Footer/Footer';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer  />
    </>
  );
}

export default App;
