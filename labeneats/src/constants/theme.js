import { createTheme } from '@mui/material/styles'
import {primaryColors} from "./colors"

const theme = createTheme({
    palette:{
        primary:{
            main: primaryColors.midGreen,
            contrastText: primaryColors.black,
        },
        secondary:{
            main: primaryColors.midGreen50,
            contrastText: primaryColors.black
        },
        terciary:{
            main: primaryColors.black25
        },
        success:{
            main: primaryColors.midGreen,
            contrastText: primaryColors.black,
        },
        info:{
            main: primaryColors.midGreen,
            contrastText: primaryColors.black,
        }
    }
  });

export default theme 