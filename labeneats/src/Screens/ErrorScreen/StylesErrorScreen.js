import styled from 'styled-components';

export const MainContainerErrorScreen = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 90vh;
`

export const Logo = styled.img`
width: 30vw;
margin-top: 20px;
`

export const TextBox = styled.section` 
display: flex;
flex-direction: column;
flex-grow: 1;
padding: 5px;

h1{
    margin: 20vh 0 5px ;
    text-align: center;
}

h3{
    margin: 5px 0 5px ;
    text-align: center;
}
`