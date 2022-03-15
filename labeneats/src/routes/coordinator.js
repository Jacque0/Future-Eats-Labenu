export const goToLogin = (navigate) => {
    navigate("/login")
}

export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToEditProfile = (navigate) => {
    navigate('/edit-profile')
}

export const goToEditAdress = (navigate) => {
    navigate('/edit-address')
}

export const goToHome = (navigate) => {
    navigate('/')
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/restaurant/${id}`)
}

export const goToSearch = (navigate) => {
    navigate('/search-restaurants')
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}