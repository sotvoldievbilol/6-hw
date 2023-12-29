import './card.css'
import { Link } from 'react-router-dom'





const Card = ({ item, buyFunc }) => {


    const textFunc = (str = 'hello', length = 10) => {
        return str.length > length
            ? str.substr(0, length - 3).trim() + '...'
            : str
    }


    return (
        <div className='card'>
            <Link to={`/dateil/${item.id}`}> 
              <img src={item.image} alt='' />
            </Link>
          
            <h2><Link to={`/dateil/${item.id}`}>{textFunc(item.title, 30)}</Link></h2 >
        <p><Link to={`/dateil/${item.id}`}>{textFunc(item.description, 40)}</Link></p >
            <p>{item.category}</p>
            <div className="card-buttom">
                <p>${item.price}</p>
                <button onClick={() => {
                    buyFunc(item)
                }}>buy</button>
            </div>
        </div >
    );
}

export default Card;