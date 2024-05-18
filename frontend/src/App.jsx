import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={SignIn} />
        <Route path="/signup" Component={SignUp} />
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/transfer" Component={SendMoney} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
