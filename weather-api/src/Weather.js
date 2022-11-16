import {useState} from 'react'
import './Weather.css'



function Weather() {

    const [zip, setZip] = useState('33180')
    const [unit, setUnit] = useState('metric')

    return (
      <div className="Weather">
        <h1>
          {zip} {unit}
        </h1>
        <form>
          <div>
            <input
              placeholder="Enter Zip Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
            <button>Submit</button>
          </div>
          <select 
          value={unit}
          onChange={(e) => setUnit(e.target.value)}>
            <option value="metric">Celcius</option>
            <option value="imperial">Farenheit</option>
            <option value="standard">Kelvin</option>
          </select>

          <label>
            <input
              type="radio"
              name="unit"
              checked={unit === "metric"}
              onChange={() => setUnit("metric")}
            />
            metric
          </label>

          <label>
            <input
              type="radio"
              name="unit"
              checked={unit === "imperial"}
              onChange={() => setUnit("imperial")}
            />
            imperial
          </label>

          <label>
            <input
              type="radio"
              name="unit"
              checked={unit === "standard"}
              onChange={() => setUnit("standard")}
            />
            standard
          </label>
        </form>
      </div>
    );
}

export default Weather
