import styled from "styled-components"

const Icon = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.color ? props.color : 'black'};
  border-radius: 50%;
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
  return <Icon color={props.color}/>
}
