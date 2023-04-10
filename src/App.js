import { useState } from 'react'

import MainEnter from "./components/enter/MainEnter";
import MainResult from "./components/result/MainResult";

function App() {

  const [res, setRes] = useState([])
  const [show, setShow] = useState(false)

  return (
      <div className="w-screeen h-screen flex justify-center">
          <div className="xl:w-[1200px] w-full flex xx:flex-row flex-col items-center pt-[100px]">
              <MainEnter setRes={setRes} setShow={setShow}/>
              {
                show === false ?
                  null 
                : 
                  <MainResult res={res}/>
              }
          </div>
    </div>
  );
}

export default App;
