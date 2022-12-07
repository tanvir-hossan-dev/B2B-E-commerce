import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import data from "./data";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/features/card/cardSlice";

const Home = () => {
  const dispatch = useDispatch();

  const handleSubmit = (item) => {
    dispatch(addCard(item));
  };
  return (
    <div className="max-w-[1200px] m-auto py-24">
      <h2 className="text-4xl font-sans pb-12">All Products</h2>
      <div className="grid grid-cols-4 gap-6">
        {data.map((item) => {
          const { name, id, photo, price } = item;
          return (
            <div key={id} className="p-6 bg-white shadow-lg shadow-gray-500 rounded-xl">
              <img src={photo} alt="product img" />
              <h3 className="font-sans text-2xl pt-6 ">
                <Link>{name}</Link>
              </h3>
              <h3 className="font-sans text-2xl py-2">{price}</h3>
              <div className="">
                <button
                  onClick={() => handleSubmit(item)}
                  className="py-[8px] px-[15px] text-[18px] border-[1px] border-solid rounded-md border-gray-600 "
                >
                  <BsFillCartPlusFill />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
