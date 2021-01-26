import './App.css';
import {useState} from 'react'

function App() {
  const [Weight, setWeight] = useState(90);
  const [Bottles, setBottles] = useState(1);
  const [Time, setTime] = useState(1);
  const [Gender, setGender] = useState('male');
  const [Result, setResult] = useState(0);

  function Calculate(e) {
    e.preventDefault();
    const grams = Bottles * 0.33 * 8 * 4.5 - ((Weight / 10) * Time);
    let result = 0;
    if (Gender === 'male') {
      result = grams / (Weight * 0.7);
    } else {
      result = grams / (Weight * 0.6);
    }
    setResult(result);
  }

  return (
    <div className="App">
      <form onSubmit={Calculate}>
        <h3>Calculating alcohol blood level</h3>
        <div>
          <label>Weight</label>
          <input name='weight' type='number' value={Weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label>Bottles</label>
          <select name='bottles' value={Bottles} onChange={e => setBottles(e.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </div>
        <div>
          <label>Time</label>
          <select name='time' value={Time} onChange={e => setTime(e.target.value)}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='5'>5</option>
            <option value='8'>8</option>
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type='radio' name='gender' value='female' onChange={e => setGender(e.target.value)} /><label>Female</label>
        </div>
        <div><output>{Result.toFixed(2)}</output></div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
