import React from 'react'
import { useSelector } from 'react-redux'
import CartCountItem from './CartCountItem'
import CartItem from './CartItem'
import TotalItem from './TotalItem'

const itemArray = [
    {
      title: 'Asus Vivobook X515MA (20)',
      amount: 'Tk 35,500'
    },
    {
      title: 'Dell E1916HV 18.5 Inch (35)',
      amount: 'Tk 9,300'
    },
    {
      title: 'Canon Eos 4000D 18MP (72)',
      amount: 'Tk 36,500'
    },
  ]

export default function ShoppingCart() {
    const state = useSelector(state => state);

    console.log(state);
  return (
    <div className="bg-gray-50 h-full md:h-screen">
        <div className="grid place-items-center">
          <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {state.map((cart, index) => (
                <CartItem title={itemArray[index].title} amount={itemArray[index].amount} key={cart.id} id={cart.id} />
            ))}
          </div>
          <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <CartCountItem title="Asus Vivobook X515MA" amount="0" />
              <CartCountItem title="Dell E1916HV 18.5 Inch" amount="0" />
              <CartCountItem title="Canon Eos 4000D 18MP" amount="0" />

              <TotalItem title="Total Item" totalItemAmount="0" />
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <TotalItem title="Total Price" totalItemAmount="0" />
            </div>
          </div>
        </div>
      </div>
  )
}
