import styled from 'styled-components';

const Wrapper = styled.div`
    width: 560px;
    height: 900px;
    background-color: white;
    padding: 30px;
`

const Title = styled.div`
    display: inline-block;
    height: 200px;
`

const Text = styled.span`
    font-size: 16px;
`

const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
`

const Description = styled.div`
    height: 500px;
    display: inline-block;
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
