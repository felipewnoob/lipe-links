import './App.css'
import { FaGithubSquare } from "react-icons/fa";
import Linkedin from './components/Linkedin';


function App() {
  return (
    <div className='container-app'>
      <h1>Links Lipe</h1>

      <a href="https://github.com/felipewnoob" className='links' target='_blank'>
      <FaGithubSquare /> 
      GitHub
      <FaGithubSquare />
      </a>
   
      <Linkedin/>

   
   
    </div>
  )
}

export default App
