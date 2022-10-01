import styled from 'styled-components';
import { ReactComponent as AddSvg } from '../../svg/add.svg';
import { ReactComponent as EmptyBox } from '../../svg/empty_box.svg';

const Container = styled.div`
    position: relative;
  height: 100%;
  width: 100%;
`

const ButtonWrapper = styled.div`
    width: 120px;
    height: 30px;
    margin-top: 10px;
    margin-right: 10px;
    float: right;
`

const Title = styled.div`
    margin-top: 30px;
    font-weight: 600;
    font-size: 24px;
    color: #475737
`

const Add = styled(AddSvg)`
    position: absolute;
    bottom: 90px;
    right: 90px;
    cursor: pointer;
`

const Main = styled.div`
    //width: 100%;
    margin-top: 120px;
    padding: 0 100px;
`

const EmptyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Empty = styled(EmptyBox)`
    margin-top: 100px;
    width: 200px;
    height: 200px;
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3.5rem;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ButtonWrapper,
    Title,
    Add,
    Container,
    Main,
    CardsContainer,
    EmptyContainer,
    Empty
}
