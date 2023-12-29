
import React from 'react';
import './cart.css';

const Cart = ({ cartData, setCartData, buyFunc }) => {
  const minusCount = (obj) => {
    const idx = cartData.findIndex((item) => obj.id === item.id);

    if (obj.count > 1) {
      cartData[idx].count = cartData[idx].count - 1;
      setCartData([...cartData]);
    } else {
      setCartData(cartData.filter((item) => item.id !== obj.id));
    }
  };

  const deleteProduct = (obj) => {
    setCartData(cartData.filter((item) => item.id !== obj.id));
  };

  const totalItemsInCart = cartData.reduce((acc, item) => acc + item.count, 0);

  return (
    <section>
      <div className='container'>
        {cartData.length === 0 ? (
          <p>No items in the cart. Buy something!</p>
        ) : (
          <>
            <p>
              <b>Total items in the cart:</b> {totalItemsInCart}
            </p>
            <p>
              <b>Total:</b>${' '}
              {cartData
                .reduce((acc, rec) => acc + rec.price * rec.count, 0)
                .toFixed(2)}
            </p>
            <button
              onClick={() => {
                setCartData([]);
              }}
            >
              Clear Cart
            </button>

            {cartData.map((item) => (
              <div className='cart-item' key={item.id}>
                <div className='cart-item-col'>
                  <img src={item.image} alt='' />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>

                <div className='cart-item-col'>
                  <p>
                    <button
                      onClick={() => {
                        minusCount(item);
                      }}
                    >
                      -
                    </button>
                    {item.count}
                    <button
                      onClick={() => {
                        buyFunc(item);
                      }}
                    >
                      +
                    </button>
                  </p>
                  <p>
                    <b>Price:</b>${(item.count * item.price).toFixed(2)}
                  </p>
                  <button onClick={() => deleteProduct(item)}>
                    Delete Product
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;