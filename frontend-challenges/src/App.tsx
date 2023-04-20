import { ResultsSummary } from './components/results-summary/results-summary.component'
import './App.css'
import data from '../src/utilities/results-summary-data/data.json';
function App() {
  return (
    <div className="App">
      <ResultsSummary props={data}/>
    </div>
  )
}

export default App
