import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./pages/home/home";
import {useDispatch, useSelector} from "react-redux";
import { getAllHouse } from "./redux/actionThunk/houseActionThunk";
import { useEffect } from "react";
import UpdateProfile from "./pages/userProfile/UpdateProfile";
import Booking from "./pages/booking/booking";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { SignInPage } from "./pages/SignIn/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RightContent from "./components/userProfile/content/RightContent";
import AddHouse from "./components/addHouse/addHouse";
import { ChangePassword } from "./components/changePassword/changePassword";
import {openNotificationWithIcon, loading} from "./components/Notification/NotificationWithIcon";
import HistoryRentHouse from "./components/history/HistoryRentHouse";
import Notification from "./components/notification/Notification";
import BookingPending from "./components/bookingPending/BookingPending";

function App() {
  console.log(123)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllHouse());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/profile"} element={<UpdateProfile />}>
          <Route path={"/profile/:id"} element={<RightContent />} />
          <Route path={"/profile/addHouse"} element={<AddHouse />} />
          <Route
            path={"/profile/changePassword"}
            element={<ChangePassword />}
          />
        </Route>
        <Route path={"/"} element={<Home />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/login"} element={<SignInPage />} />
        <Route path={"/detail/:id"} element={<Booking />} />
        <Route path={"/history"} element={<HistoryRentHouse/>}/>
        <Route path={"/notification"} element={<Notification/>}/>
        <Route path={"/bookingPending"} element={<BookingPending/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
