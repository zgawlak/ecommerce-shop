import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdRemove, IoMdAdd } from 'react-icons/io';

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const CADollar = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  });

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:text-gray-400">{title}</Link>
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-900 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center px-2">{amount}</div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex justify-around items-center">{CADollar.format(price)}</div>
            <div className="flex-1 flex justify-center items-center text-primary font-medium">{CADollar.format(price * amount)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
