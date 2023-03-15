import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ArticleDetails from './pages/ArticleDetails/ArticleDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/latest" element={<Home />} />
        <Route exact path="/top" element={<Home />} />
        <Route exact path="/:author/:slug" element={<ArticleDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
