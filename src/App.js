import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container p-4 pt-10 m-auto text-center min-w-4/5">
      <Outlet />
    </div>
  );
}

export default App;
