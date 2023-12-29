import './details.css'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



const Details = ({ buyFunc }) => {
    const [data, setData] = useState({});
    const params = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${params.id}`)
            .then(({ data }) => setData(data));
    }, [])
    return (
        <section className='detail'>

            {

                JSON.stringify(data) == '{}'
                    ? <div className="preloader">
                        <div className='lds-ellipsis'><div></div><div></div><div></div></div>

                    </div>





                    : <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={data.image} alt="" className='detail-img' />
                            </div>
                            <div className='col-6'>
                                <h2>{data.title}</h2>
                                <p>{data.discreption}</p>
                                <p><b>category:</b> {data.category}</p>
                                <p><b>price:</b>{data.price}</p>
                                <button onClick={() => {
                                    buyFunc(data)
                                }}>buy</button>
                                <button onClick={() => {
                                    navigate(-1)
                                }}>go back</button>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
}

export default Details;