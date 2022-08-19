import React from "react";
import { useSelector } from "react-redux";
import CartCountItem from "./CartCountItem";
import CartItem from "./CartItem";
import TotalItem from "./TotalItem";

export default function ShoppingCart() {
  const state = useSelector((state) => state);

  return (
    <div className="bg-gray-50 h-full md:h-screen">
      <div className="grid place-items-center">
        <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
          Shopping Cart
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
          {state.carts.map((cart, index) => (
            <div key={cart.id}>
              {cart.totalCount !== 0 ? (
                <CartItem
                title={cart.title}
                amount={cart.amount}
                key={cart.id}
                cart={cart}
              />
              ) : null}
            </div>
          ))}
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            {state.carts.map((cart, index) => (
              <div key={cart.id}>
                {cart.orderCount !== 0 ? (
                  <CartCountItem
                    title={cart.title}
                    amount={cart.totalCount}
                    key={cart.id}
                    cart={cart}
                  />
                ) : null}
              </div>
            ))}

            <TotalItem title="Total Item" totalItemAmount={state.totalItem} />
          </div>
          <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
            <TotalItem
              title="Total Price"
              totalItemAmount={state.totalAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
