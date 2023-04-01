import './App.css';
import {useState} from 'react'

function App() {

  const [calculator, setCalculator] = useState({

  })

  const clearHandler = () => {
    calculator = 0
  }

  return (
    <div className="container bg-slate-500 p-20">
      <div className="border-4 bg-slate-700 border-stone-900 m-auto text-center w-96 h-100 mt-10 rounded-3xl shadostone p-2 py-4 hover:opacity-95" onClick="jiggle the calculator">
        <div className="bg-black h-20 my-1 mx-4 rounded-lg text-green-800 shadow-lg flex items-center justify-center text-xl border-green-400 hover:border hover:border-white cursor-text">
          <p>...awaiting calculation</p>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-700 hover:rounded-3xl transition" onClick={clearHandler}>C</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick="">%</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-red-900 hover:rounded-3xl transition" onClick="">DEL</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick="">/</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">7</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">8</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">9</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick="">*</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">4</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">5</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">6</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick="">+</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">1</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">2</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">3</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick="">-</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-stone-100 hover:rounded-3xl transition" onClick="">Mode</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-gray-900 hover:rounded-3xl transition" onClick="">.</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick="">0</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-blue-900 hover:rounded-3xl transition" onClick="">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
