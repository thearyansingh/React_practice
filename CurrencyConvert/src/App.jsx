import React, { useState } from 'react'

import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputBox from './components/InputBox';
const App = () => {
  const [amount,setAmount]=useState(0);
  const[to,setTo]=useState("usd")
  const [from,setFrom]=useState('inr')
  const [converted,setConvert]=useState(0)
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setAmount(converted)
    setConvert(amount)
  }
  const convertAmount=()=>{
    setConvert(amount * (currencyInfo[to]));
  }
 
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/421927/pexels-photo-421927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convertAmount()
                    }}
                >
                    <div className="w-full mb-1">
                      <InputBox
                      label="from"
                      amount={amount}
                      onAmountChange={(Currency)=>setAmount(amount) }
                      currencyOptions={options}
                      selectCurrency={from}
                      
                      />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                         label="to"
                         amount={converted}
                         oncurrencyChange={(currency)=>setTo(currency)}
                         currencyOptions={options}
                         currencyDisable

                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase} to {to.toUpperCase}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
