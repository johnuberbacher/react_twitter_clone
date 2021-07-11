import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="app">
      <SideBar/>
      <Feed/>
      <Trending/>
    </div>
  );
}

export default App;
