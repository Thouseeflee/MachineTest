import Nav from "./components/Nav";
import Sidebar2 from "./components/Sidebar2";
import UserChat from "./components/UserChat";
function App() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-1 mt-5 sidebar">
    <Nav/>
        </div>
        <div className="col-md-9 ">
    <UserChat/>
        </div>
        <div className="col-md-2">
          <Sidebar2 />
        </div>
      </div>
    </div>
  );
}

export default App;
