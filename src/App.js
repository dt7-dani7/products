import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Product from './Product';
import Header from './Header';



function App() {
  return (
    <div className="app">
      <Header/>
      <Product/>
    </div>
  );
}

export default App;
