import axios from "axios";
import { Outlet } from "react-router-dom";

// async function test() {
//   const response = await axios.get("/.netlify/functions/movie");

// }
// test();

function App() {
  return (
    <div className="container p-4 pt-10 m-auto text-center min-w-4/5">
      <Outlet />
    </div>
  );
}

export default App;
