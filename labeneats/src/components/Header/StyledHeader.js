import styled from 'styled-components';

export const Bar = styled.div`
display:flex;
align-items:center;
border-bottom:1px solid #E6E6E6;
box-shadow: 0 0.5px 0 0 var(--black-25);
width:100%;
height: 64px;

    .BackIcon{
        position: absolute;
        left: 6%;
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