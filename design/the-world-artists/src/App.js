

import './App.css';
import Navbar from './components/navigation/Navbar';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Foot from './views/foot';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
        <div className="container mt-5 ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={ProductDetails} />      
          </Switch>
        </div>
        <Foot />
      </BrowserRouter>
    </div>
  );
}

export default App;
