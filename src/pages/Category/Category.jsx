import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../../components/Card/Card";

const Category = ({buyFunc}) => {
    const [product, setProduct]  = useState([]);
    const params = useParams();




    useEffect(() =>{
        setProduct([])
      axios(`https://fakestoreapi.com/products/category/${params.category}`)
      .then(({data})=>{
         setProduct(data);
   
        })
    }, [params])
    return (
        
        <section>
           <div className='container'>
                <dir className='row'>

                    {
                        product.length ==0
                        ?<div className="preloader">
                        <div className='lds-ellipsis'><div></div><div></div><div></div></div>
            
                        </div>
                        : product.map((item) => {
                            return <div key={item.id} className='col-4'>
                              <Card buyFunc={buyFunc} item={item}/>
                            </div>
                        })
                    }
                </dir>
            </div>
        </section>
    );
}

export default Category;