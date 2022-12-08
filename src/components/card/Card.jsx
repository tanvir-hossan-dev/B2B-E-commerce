import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { deleteCard } from "../../redux/features/card/cardSlice";

const Card = () => {
  const { cards } = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const handleCardDelete = (id) => {
    dispatch(deleteCard(id));
  };

  return (
    <div className="w-[1200px] flex m-auto border-[1px] mt-[100px] mb-8 border-solid py-4 px-6 border-gray-300 rounded-sm">
      <div className="w-3/5">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>index</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cards?.map((card, index) => {
                const { name, price, id } = card;

                return (
                  <tr key={index}>
                    <th className="w-[70px]">{index + 1}</th>
                    <td>{name}</td>
                    <td>{price} tk</td>
                    <td>
                      <p
                        onClick={() => handleCardDelete(id)}
                        className="text-red-500 text-[22px] cursor-pointer inline-block"
                      >
                        <AiFillDelete />
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-2/5">
        <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div class="flex justify-center items-center text-center">
            <div class="text-xl font-semibold">
              <p>Total Item</p>
              <p class="text-5xl">
                {cards.reduce((accumulator, current) => {
                  return accumulator + current.quantity;
                }, 0)}
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div class="flex justify-center items-center text-center">
            <div class="text-xl font-semibold">
              <p>Total Price</p>
              <p class="text-5xl">
                {cards.reduce((accumulator, current) => {
                  return accumulator + current.quantity * current.price;
                }, 0)}
              </p>
            </div>
          </div>
        </div>
        <div className="py-4 px-4 w-full">
          <button className="btn  btn-active w-full btn-primary">Confirm Order</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
