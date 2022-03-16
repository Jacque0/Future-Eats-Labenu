import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/BASE_URL'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { CardsContainer, HeaderContainer, SearchContainer } from './styled'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Header from '../../components/Header/Header'

export default function SearchScreen() {
 /*  useProtectedPage() */

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`).data.restaurants

  const [restaurantName, setRestaurantName] = React.useState("");

  const handleChange = (event, newValue) => {
    newValue = event.target.value
    setRestaurantName(newValue);
    console.log(restaurantName)
  };

  const restaurantsList = restaurants?.filter(restaurant => {
    if( restaurantName === "") {
      return 
    } else {
      return restaurant.name.toUpperCase().includes(restaurantName.toUpperCase())
    }
  }).map(restaurant => {
    return <RestaurantCard
            key = {restaurant.id}
            logoUrl ={restaurant.logoUrl} 
            name={restaurant.name} 
            shipping={restaurant.shipping} 
            deliveryTime={restaurant.deliveryTime} />
  })

  return (
    <div>
      <Header title="Busca" backButton="backButton" />
      <SearchContainer>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <TextField id="outlined-search" type="search"  variant='outlined' label="Restaurante" sx={{width: 345,margin: "auto", marginTop: 2 }}
            autoFocus
            value={restaurantName}
            onChange={handleChange}
            InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sxc={{ color: 'action.active', mr: 1, my: 0.5 }}/>
              </InputAdornment>
            ),
          }}/>
        </Box>
      </SearchContainer>
      {restaurantName === "" ?
        <HeaderContainer>
          <p>Busque por nome de restaurante</p>
        </HeaderContainer>
      :
      (restaurantsList.length === 0 ?
        <HeaderContainer> 
          <p>Não encontramos :(</p>
        </HeaderContainer>
      :
        <CardsContainer>
        {restaurantsList}
      </CardsContainer> 
      )
      }
    </div>
  )
}
