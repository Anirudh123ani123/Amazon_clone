//  import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Home from "./Home.js";
import Header from "./Header.js";
import Product from "./Product.js";
import Form from './interview/Form';
import store from './store/storeFile';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Header/>
    <Router>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/form" element={<Form/>}/>
    </Routes>
    </Router>
    </div>
    </Provider>
  );
}

export default App;
