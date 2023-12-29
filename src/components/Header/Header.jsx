import './header.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';


const Header = ({ cartData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products/categories')
      .then(({ data }) => setCategories(data));
  }, []);

  const totalItemsInCart = cartData.reduce((acc, item) => acc + item.count, 0);

  return (
    <header>
      <div className='container header-container'>
        <h1><Link to={'/'}>Shop</Link></h1>
        <nav>
          {categories.map(item => (
            <Link key={item} to={`/category/${item}`}>{item}</Link>
          ))}
          <Link to={'/'}>home</Link>
          <Link to={'/cart'}>
            Cart: count {totalItemsInCart > 0 && <span className="cart-indicator">{totalItemsInCart}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;