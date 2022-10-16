import styled from 'styled-components';
import { ReactComponent as Heart } from '../../svg/heart.svg';

interface Icon {
    isActive?: boolean
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const FilterIcon = styled(Heart)<Icon>`
  color: ${({ isActive }) => isActive ? 'red' : 'white'};
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-left: 30px;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Container,
    FilterIcon
}
