import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Details from './components/Details';
import Home from './components/Home';
import Nav from './components/Nav';
import store from './store';

function App() {
  return (
    <Router>
    <Provider store={store}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/details/:id" exact element={<Details />} />
      </Routes>
      </Provider>
    </Router>
  );
}

export default App;
