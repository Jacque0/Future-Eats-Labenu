import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen/SignUpScreen";
import EditProfileScreen from "../Screens/EditProfileScreen/EditProfileScreen";
import EditAdressScreen from "../Screens/EditAdressScreen/EditAdressScreen";
import RestaurantScreen from "../Screens/RestaurantScreen/RestaurantScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import CartScreen from "../Screens/CartScreen/CartScreen";
import SearchScreen from "../Screens/SearchScreen/SearchScreen";
import ErrorScreen from "../Screens/ErrorScreen/ErrorScreen";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/edit-profile" element={<EditProfileScreen />} />
        <Route path="/edit-address" element={<EditAdressScreen />} />
        <Route path="/restaurants/:id" element={<RestaurantScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/search-restaurants" element={<SearchScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
