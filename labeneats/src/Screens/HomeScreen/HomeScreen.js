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

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom'

export default function HomeScreen() {
 /*  useProtectedPage() */

  const navigate = useNavigate() 

  const restaurants = useRequestData([], `${BASE_URL}/restaurants`).data

  const [valueCategory, setValueCategory] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValueCategory(newValue);
    console.log(valueCategory)
  };

  const restaurantsList = restaurants?.filter(restaurant => {
    if( valueCategory === 0) {
      return restaurant
    } else if (valueCategory === 1) {
      return restaurant.category === "Hamburguer"
    } else if (valueCategory === 2) {
      return restaurant.category === "Asiática"
    } else if (valueCategory === 3) {
      return restaurant.category === "Árabe"
    } else if (valueCategory === 4) {
      return restaurant.category === "Mexicana"
    } else if (valueCategory === 5) {
      return restaurant.category === "Baiana"
    } else if (valueCategory === 6) {
      return restaurant.category === "Petiscos"
    } else if (valueCategory === 7) {
      return restaurant.category === "Sorvetes"
    } else if (valueCategory === 8) {
      return restaurant.category === "Carnes"
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
      <p>FutureEats</p>
      </HeaderContainer>
      <hr />
      <SearchContainer>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <TextField id="outlined-search" type="search"  variant='outlined' label="Restaurante" sx={{width: 345,margin: "auto", marginTop: 2 }}
          onClick={() => goToSearch(navigate)}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sxc={{ color: 'action.active', mr: 1, my: 0.5 }}/>
            </InputAdornment>
          ),
        }}/>
      </Box>
      </SearchContainer>
      <Box sx={{ maxWidth: { xs: 350, sm: 480 }, margin: "auto" }}>
      <Tabs
        value={valueCategory}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        <Tab label="Tudo"/>
        <Tab label="Burguer"/>
        <Tab label="Asiática" />
        <Tab label="Árabe" />
        <Tab label="Mexicano" />
        <Tab label="Baiana" />
        <Tab label="Petiscos" />
        <Tab label="Doces" />
        <Tab label="Carnes" />
      </Tabs>
    </Box>
      <CardsContainer>
        {restaurantsList}
        {console.log(restaurantsList)}
      </CardsContainer>
      </div>
  )
}
