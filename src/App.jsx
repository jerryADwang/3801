import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import DataForm from './pages/DataForm'
import './index.css'
import Employee from './pages/Employee'
import Settings from './pages/Settings'
import Solution from './pages/Solution'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/insights" element={<DataForm />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/analytics" element={<DataForm />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  )
}

export default App
