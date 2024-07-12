import Game from "./Game"
import './App.css'
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <header>
        <h1>Towers of Hanoi</h1>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        />

        <ToastContainer />
      </header>
      <main>
        <Game /> 
      </main>
      <footer>
        <h2>Created by Cob Salad</h2>
      </footer>
    </>
  )
}

export default App
