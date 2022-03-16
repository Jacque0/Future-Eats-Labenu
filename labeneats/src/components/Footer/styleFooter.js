import styled from "styled-components";
import Button from '@mui/material/Button';

export const ContainerFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    position: fixed;
    bottom: 0;
    z-index: 3;
    background-color: white;
`
export const ButtonFooter = styled(Button)`
    width: 120px;
    height: 49px;
    padding: 10px 46px 9px 47px;
`