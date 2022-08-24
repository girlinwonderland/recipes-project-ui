import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('/images/mainPage.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const MainBlock = styled.div`
    margin-top: -70px;
    margin-right: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputWrapper = styled.div`
    margin-top: 50px;
    width: 250px;
    height: 30px;
`

const ButtonBlock = styled.div`
    margin-top: 50px;
    width: 250px;
`

const Title = styled.div`
    color: #475737;
    font-size: 46px;
`

export default {
    MainBlock,
    Container,
    ButtonBlock,
    InputWrapper,
    Title
}
