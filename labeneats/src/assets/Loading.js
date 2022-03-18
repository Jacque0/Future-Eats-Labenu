import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3em;
  color: ${props => props.color ? props.color : 'black'};
  p{
    margin: 6px;
  }
`

const Icon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.color ? props.color : 'black'};
  border-bottom-color: transparent;
  border-left-color: transparent;
  animation: load 1.5s ease infinite;
  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export default function Loading(props) {
  return <Container  color={props.color}>
  <Icon color={props.color}/>
  <p>{props.children}</p>
  </Container>
}
