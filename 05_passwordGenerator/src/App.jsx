import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  const [password, setPassword] = useState(0)
  const [character, setCharacter] = useState('abcdefghijklmnopqrstuvwxyz')
  const [specialCharacter, setSpecialCharacter] = useState("!@#$%^&*()_+|")
  const [alphaNumeric, setAlphaNumeric] = useState("123456789")
  const [passwordLenght, setPasswordLength] = useState(8)
  const [checkSpecialCharacter, setCheckSpecialCharacter] = useState(false)
  const [checkAlphaNumeric, setCheckAlphaNumber] = useState(false)
  const [passwordStrongness, setPasswordStrongness] = useState('medium')


  function passwordGenerator() {
    let passwordString = character
    let pass = ''
    if(checkSpecialCharacter) {
      passwordString = passwordString + specialCharacter
    }
    if(checkAlphaNumeric) {
      passwordString = passwordString + alphaNumeric
    }

    for(let i = 0; i < passwordLenght; i++) {
      pass += passwordString.split("")[Math.ceil(Math.random() * passwordLenght)]
    }
    setPassword(pass)
  }

  useState(() => {
    passwordGenerator()
  }, [checkAlphaNumeric, checkSpecialCharacter])
  return (
    <>
      <div className="border-2 bg-gray-200 rounded-2xl  w-[500px] h-[400px] flex justify-center items-center flex-col gap-5">
        {/* input container */}
        <div>
          <input type="text" name="text" id="text" value={password} readOnly className="border-2 border-gray-400 outline-none p-1 rounded-md" />
          <button onClick={() => {
            navigator.clipboard.writeText(password)
            alert('Copied')
          }}>Copy</button>
          <div className="flex justify-end pr-2">
            {/* <span className="text-[12px]">{passwordStrongness}</span> */}
          </div>
        </div>
        {/* filter specifier */}
        <div className="flex justify-center items-center space-x-6">
          <div>
            <input type="checkbox" name="checkbox" id="checkbox" onClick={(e) => {setCheckSpecialCharacter(prev => !prev)}} />
            <label htmlFor="checkbox">Special Character</label>
          </div>
          <div>
            <input type="checkbox" name="checkbox1" id="checkbox1" onClick={(e) => {setCheckAlphaNumber(prev => !prev)}} />
            <label htmlFor="checkbox1">Alpha Numeric</label>
          </div>
        </div>
        {/* length increase  */}
        <div className="">
          <input type="range" name="" min={0} max={100} value={passwordLenght} onChange={(e) => setPasswordLength(e.target.value)} className="w-[200px]"/>
          <p>{passwordLenght}</p>
        </div>
         
        {/* convert section  */}
        <div>
          <button onClick={passwordGenerator}> Generate</button>
        </div>
      </div>
    </>
  );
}

export default App;
