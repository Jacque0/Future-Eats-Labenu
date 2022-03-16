import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { TextContainer } from './styledRestaurantCard';
import theme from '../../constants/theme';

export default function RestaurantCard(props) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, margin: "auto", marginBottom: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={props.logoUrl}
          alt="Restaurantes"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div" color="secondary.contrastText">
            {props.name}
          </Typography>
          <TextContainer>
            <Typography variant="body2" sx={{color: theme.palette.terciary.main}} >
            {props.deliveryTime} min
            </Typography>
            <Typography variant="body2" sx={{color: theme.palette.terciary.main}}>
            Frete R${parseInt(props.shipping).toFixed(2)}
            </Typography>
          </TextContainer>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

