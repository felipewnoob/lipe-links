import './App.css'
import { FaGithubSquare } from "react-icons/fa";


function App() {
  return (
    <div className='container-app'>
      <h1>Links Lipe</h1>

      <a href="https://github.com/felipewnoob" className='links' target='_blank'>
      <FaGithubSquare /> 
      GitHub
      <FaGithubSquare />
      </a>
    </div>
  )
}

export default App
