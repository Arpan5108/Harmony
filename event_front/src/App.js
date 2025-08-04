import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { About } from "./components/About";
import { Events } from "./components/Events";
import { Gallary } from "./components/Gallary";
import { Contect } from "./components/Contect";
import Changedetail from "./components/Changedetail";
import { Account } from "./components/Account";
import { Changepass } from "./components/Changepass";
import { Dashbord } from "./components/admin/Dashbord";
import { Layout } from "./Layout";
import { Forgotpassword } from "./components/Forgotpassword";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { A_login } from "./components/admin/A_login";

import { Cat } from "./components/category/Cat";
import { Cat_events } from "./components/category/Cat_events";
import { Details } from "./components/category/Details";
import { Userlist } from "./components/admin/Userlist";
import { Addevent } from "./components/admin/Addevent";
import { Category } from "./components/admin/Category";
import { A_profile } from "./components/admin/A_profile";
import { P_datail } from "./components/admin/P_datail";
import { Change_pass } from "./components/admin/Change_pass";
import { Error } from "./components/Error";
import { Booking } from "./components/Booking";

function App() {
  return (
    <div>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="mybooking" element={<Booking />}></Route>
          <Route path="events/" element={<Events />}>
            <Route path="" element={<Cat />} />
            <Route path="event" element={<Cat_events />} />
          </Route>
          <Route path="details/:id" element={<Details />} />
          <Route path="details" element={<Details />}></Route>
          <Route path="gallary" element={<Gallary />}></Route>
          <Route path="contect" element={<Contect />}></Route>
          <Route path="changedetail" element={<Changedetail />} />
          <Route path="account" element={<Account />} />
          <Route path="changepass" element={<Changepass />} />
          <Route path="forgot_password" element={<Forgotpassword />} />
        </Route>

        
        <Route path="/admin/login" element={<A_login />} />
        <Route path="/admin/" element={<Dashbord />}>
          <Route path="" element={<Userlist />} />
          <Route path="addevent" element={<Addevent />} />
          <Route path="category" element={<Category />} />
          <Route path="profile/" element={<A_profile />}>
            <Route path="" element={<P_datail />} />
            <Route path="password" element={<Change_pass />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
