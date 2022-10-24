
import './App.css';
import NavBar from "./components/NavBar";
// import ItemListContainer from "./components/ItemListContainer";
import Lateral from "./components/Lateral";



function App() {
  // let greeting = "Welcome";

  return (
    <div className='html_container'>
      
      <nav>
        <NavBar />
        {/* <ItemListContainer greeting={greeting} /> */}
      </nav>
      
      <Lateral />
      
      
     
    </div>
  );
}

export default App;           