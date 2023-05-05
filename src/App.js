// Import the component to the app
import Header from './components/Header';
import Tasks from "./components/Tasks";

const App = () => {
  return (
    // You can only have one main parent element.
    <div className="container">
    < Header />
    < Tasks />
    </div>
  
  )
}

export default App;
