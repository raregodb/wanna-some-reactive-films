import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";


function App() {

  return (
    <div className={"grey darken-4"} style={{ width: '100%', height: '100vh'}}>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App
