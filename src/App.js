import "./App.css";
import { useState, useEffect } from "react";
import icon from "./removeIcon.png";
import { Route, Routes, Link } from 'react-router-dom';
import Home from "./Home";
import Store from "./Store";

function App() {
  const [num, setNum] = useState([0, 1, 2]);

  useEffect(()=> {
    console.log()
  }, [])

  function increment() {
    setNum([...num, num[num.length - 1] + 1]);
  }

  function decrement() {
    if (num.length === 1) {
      alert("cant go no more");
      return;
    }
    num.splice(num.length - 1);
    setNum([...num]);
  }

  function deleteNum (e) {
    setNum(num.filter(item => item != e.target))
  }

  return (
    <div className="bg-red-100 h-screen">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/store'>Store</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
      </Routes>
      <button className="w-16 border-2 border-black" onClick={increment}>
        +
      </button>
      <button className="w-16 border-2 border-black" onClick={decrement}>
        -
      </button>
      <ul className="">
        {num.map((item) => {
          return (
            <li
              key={item.toString()}
              className="text-12 flex flex-row w-44 items-center space-x-36 border-2 border-blue-300"
            >
              <p>{item}</p>
              <button
                style={{ backgroundImage: `url(${icon})` }}
                className="w-4 h-4"
                onClick={(e) => {
                  
                  num.filter(item => item.value != e.target.value)
                }}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
