import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f54414;
    background-size: cover;
`

const MainPaper = styled.div`
    margin-top: 70px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonBlock = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
`

export default {
    MainPaper,
    Text,
    Container,
    ButtonBlock
}
