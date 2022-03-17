import styled from 'styled-components';
import {primaryColors} from '../../constants/colors';

export const Bar = styled.div`
display:flex;
align-items:center;
box-shadow: 0 0.5px 0 0 ${primaryColors.black25};
width:100%;
height: 34px;
position: sticky;
top: 0;
z-index: 3;
background-color: white;
    .BackIcon{
        position: absolute;
        left: 16px;
        width: 8%;
    }
`

export const Title = styled.section`
display: flex;
align-items: center;
justify-content: center;
flex-grow: 1;
text-align: center;
font-size: larger;
`