import React from 'react';
import dowanload from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'

const Card = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-5 pt-5">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{product.title}</h2>



                </div>
                <div className="flex  justify-between px-5 pb-5">
                    <div><button className='flex items-center gap-1 border rounded text-xs px-1'><img src={dowanload} alt="" className="h-3 " /> {(product.downloads )/1000000  }M</button></div>
                    <div><button className='flex items-center gap-1 border rounded text-xs px-1'><img src={ratings} alt="" className="h-3 " /> {product.ratingAvg}</button></div>

                </div>
            </div>
        </div>
    );
};

export default Card;