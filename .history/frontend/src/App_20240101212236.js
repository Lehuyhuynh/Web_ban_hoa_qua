import Header from "./component/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
