import React from 'react'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/BASE_URL'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { CardsContainer, HeaderContainer, HomePageContainer, SearchContainer } from './styled'
import { goToSearch } from '../../routes/coordinator'


import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import SearchIcon from '@mui/icons-material/Search';
import theme from '../../constants/theme'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'

export default function SearchScreen() {
 /*  useProtectedPage() */

  const navigate = useNavigate() 

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`).data

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
      return restaurant.name.includes(restaurantName)
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
        <HeaderContainer>
      <p>Busca</p>
      </HeaderContainer>
      <hr />
      <SearchContainer>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField id="outlined-search" type="search"  variant='outlined' label="Restaurante" sx={{width: 345,margin: "auto", marginTop: 2 }}
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
       {console.log(restaurantsList)}
      </div>
  )
}
