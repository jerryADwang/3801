import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import DataForm from './pages/DataForm'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/dataform" element={<DataForm />} />
      </Routes>
    </Router>
  )
}

export default App
