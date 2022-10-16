import styled from 'styled-components';

const Wrapper = styled.div`
    width: 560px;
    height: 700px;
    background-color: white;
    padding: 30px;
`

const Title = styled.div`
    height: 200px;
    display: flex;
    align-items: flex-start;
`

const Text = styled.label`
    font-size: 16px;
`

const Input = styled.textarea`
    border: none;
    outline: none;
  height: 200px;
  width: 560px
    //height: 100%;
`

const Description = styled.div`
    height: 380px;
  display: flex;
  align-items: flex-start;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Wrapper,
    Title,
    Description,
    Bottom,
    Text,
    Input
}
