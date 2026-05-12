import React from 'react';
import dowanload from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'

const Card = ({ product }) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className="px-5 pt-5">
                    <div className="w-full h-52 overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
                        <img
                            src={product.image}
                            alt={product.title}
                            className=" h-52 object-cover"
                        />
                    </div>
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{product.title}</h2>



                </div>
                <div className="flex  justify-between px-5 pb-5 ">
                    <div><button className='flex items-center gap-1 border border-gray-400 rounded text-xs px-1'><img src={dowanload} alt="" className="h-3 " /> {(product.downloads) / 1000000}M</button></div>
                    <div><button className='flex items-center gap-1 border rounded border-gray-400 text-xs px-1'><img src={ratings} alt="" className="h-3 " /> {product.ratingAvg}</button></div>

                </div>
            </div>
        </div>
    );
};

export default Card;