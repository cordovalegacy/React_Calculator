import './App.css';
import { useState } from 'react'

function App() {

  const [display, setDisplay] = useState("")
  const [storedNum, setStoredNum] = useState("")
  const [op, setOp] = useState("")
  const [result, setResult] = useState(0)
  const [modeVal, setModeVal] = useState(false)
  const [shakeVal, setShakeVal] = useState(false)

  const pressHandler = (id) => {
    if (/^[0-9]$/.test(id) || id == '.') { //<= outer forward slashes act as a container for the regular expression (/exp/); ^ act as beginning of string; $ act as end of string; [0-9] accepts only these digits; .test checks string value boolean.
      //Above method is shorthand for writing out if(id == '0' || id == '1' || blah blah)
      setDisplay([display + id])
    }
    else if (id == '-' || id == '+' || id == '*' || id == '/' || id == '%') {
      setOp(id)
      setStoredNum(display)
      setDisplay("")
    }
    else if (id == '=') {
      const a = parseFloat(storedNum)
      const b = parseFloat(display)
      let res
      if (op == '-') {
        res = a - b
      }
      else if (op == '+') {
        res = a + b
      }
      else if (op == '*') {
        res = a * b
      }
      else if (op == '/') {
        res = a / b
      }
      else if (op == '%') {
        res = (a / 100) * b
      }
      setResult(res)
      setDisplay(res.toString())
      setOp("")
      setStoredNum("")
    }
    else if (id == 'C') {
      setResult("")
      setDisplay("")
      setOp("")
      setStoredNum("")
    }
    else if (id == 'MODE') {
      let mode = document.getElementById('mode')
      let screen = document.getElementById('screen')
      setModeVal(!modeVal)
      if (modeVal === false) {
        mode.className = "border-4 bg-white border-stone-600 m-auto text-center w-96 h-100 mt-10 rounded-3xl shadow-xl p-2 py-4 hover:opacity-95"
        screen.className = "bg-black h-20 my-1 mx-4 rounded-lg text-green-900 shadow-lg flex items-center justify-center text-4xl border-2 border-black hover:border-3 hover:border-green-900 cursor-text"
      } else if (modeVal === true) {
        mode.className = "border-4 bg-slate-700 border-stone-900 m-auto text-center w-96 h-100 mt-10 rounded-3xl shadow-xl p-2 py-4 hover:opacity-95"
        screen.className = "bg-black h-20 my-1 mx-4 rounded-lg text-green-800 shadow-lg flex items-center justify-center text-4xl border-green-400 hover:border hover:border-white cursor-text"
      }
    }
    else if (id == 'DEL') {
      if (display != '') {
        const updatedValue = display.map(delNum => delNum.slice(0, -1))
        setDisplay(updatedValue)
      }
    }
    else if (id == 'JIGGLE') {
      let mode = document.getElementById('mode')
      setShakeVal(!shakeVal)
      if(shakeVal === false){
        mode.classList.add("shake")
        mode.classList.replace("cursor-grab", "cursor-grabbing")
      }
      else if(shakeVal === true){
        mode.classList.remove("shake")
        mode.classList.replace("cursor-grabbing", "cursor-grab")
      }
      setShakeVal(false)
    }
  }

  return (
    <div className="container bg-slate-500 p-20">
      <div id='mode' className="border-4 bg-slate-700 border-stone-900 m-auto text-center w-96 h-100 mt-10 rounded-3xl shadow-xl p-2 py-4 hover:opacity-95 cursor-grab" onClick={() => pressHandler('JIGGLE')}>
        <div id='screen' className="bg-black h-20 my-1 mx-4 rounded-lg text-green-800 shadow-lg flex items-center justify-center text-4xl border-green-400 hover:border hover:border-white cursor-text">
          {display == "" ? <p>0</p> : <p>{display}</p>}
        </div>
        <div>
          <button  className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-700 hover:rounded-3xl transition" onClick={() => pressHandler('C')}>C</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick={() => pressHandler('%')}>%</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-red-900 hover:rounded-3xl transition" onClick={() => pressHandler('DEL')}>DEL</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick={() => pressHandler('/')}>/</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('7')}>7</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('8')}>8</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('9')}>9</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick={() => pressHandler('*')}>*</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('4')}>4</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('5')}>5</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('6')}>6</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick={() => pressHandler('+')}>+</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('1')}>1</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('2')}>2</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('3')}>3</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-amber-900 hover:rounded-3xl transition" onClick={() => pressHandler('-')}>-</button>
        </div>
        <div>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-stone-100 hover:rounded-3xl transition" onClick={() => pressHandler('MODE')}>Mode</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-gray-900 hover:rounded-3xl transition" onClick={() => pressHandler('.')}>.</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-green-900 hover:rounded-3xl transition" onClick={() => pressHandler('0')}>0</button>
          <button className="bg-stone-700 hover:bg-stone-800 text-white font-bold py-4 w-1/5 rounded-2xl text-lg m-1 shadow-2xl border border-stone-600 hover:border-blue-900 hover:rounded-3xl transition" onClick={() => pressHandler('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
