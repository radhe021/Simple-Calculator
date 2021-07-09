import React ,{useState,useEffect} from 'react'
import "./index.css";

export default function Calculator() {
  var [operationCount, setOperationCount] = useState(0);
  var [operationSign, setOperationSign] = useState('');
  var [operaionResult, setoperaionResult] = useState('');
  var [visible, setvisible] = useState(false);

  var input1= document.getElementById('input1')?.value;
  var input2 = document.getElementById('input2')?.value;

  useEffect(()=>{
  switch (operationSign) {
    case '+':
      setoperaionResult((Number(input1) + Number(input2)).toString())
      break;
    case '-':
      setoperaionResult((input1-input2).toString())
      break;
    case '*':
      setoperaionResult((input1*input2).toString())
      break;
    case '/':
      setoperaionResult(input2 !=0 ?(input1/input2):0)
      break;
    default:
      setvisible(false)
      break;
  }  
  
},[operationSign,input1,input2])

  const performOperation=(sign)=>
  {
    setOperationCount(operationCount+1);
    setOperationSign(sign);
    setvisible(true);
  }
  const resetAll =()=>{
    setOperationCount(0);
    setvisible(false);
    document.getElementById('input1').value='';
    document.getElementById('input2').value='';
   
  }
 

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations">Operation count is : {operationCount}</div>
      <div className="card">

        <section className="card-text">
          <div className="layout-row justify-content-around align-items-center mt-40">
            <input id="input1" type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                name="input1"/>
            <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator">{operationSign}</label>
            <input id="input2" type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
               placeholder="Eg: 2"/>
          </div>
          <div className="layout-row justify-content-around mt-30">
            <button onClick={() =>(performOperation('+'))} className="operationFont" type="submit" data-testid="addButton">+</button>
            <button onClick={() =>(performOperation('-'))} className="operationFont" type="submit" data-testid="subtractButton">-</button>
            <button onClick={() =>(performOperation('*'))} className="operationFont" type="submit" data-testid="multiplyButton">*</button>
            <button onClick={() =>(performOperation('/'))} className="operationFont" type="submit" data-testid="divideButton">/</button>
          </div>

          <div className="layout-row justify-content-between align-items-center mt-30">
            <button onClick={resetAll} type="reset" data-testid="resetButton" className="outline danger">Reset</button>
            <div className="layout-row justify-content-center align-items-center result-container">
              <div data-testid="result" className="result-value ma-0 slide-up-fade-in"> {visible && operaionResult}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );

}