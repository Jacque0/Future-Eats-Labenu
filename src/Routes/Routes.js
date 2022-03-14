import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/login' element={<LoginScreen />} />
                <Route path='/signup' element={<SignUpScreen />} />
                <Route path='/editsignup' element={<EditProfileScreen />} />
                <Route path='/editaddress' element={<EditAdressScreen />} />
                <Route path='/restaurants/:id' element={<RestaurantScreen />} />
                <Route path='/profile' element={<ProfileScreen />} />
                <Route path='/cart/' element={<CartScreen />} />
                <Route path='*' element={<ErrorScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;