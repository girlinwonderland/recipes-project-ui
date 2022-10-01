import styled from 'styled-components';
import { ReactComponent as More } from '../../svg/more-2.svg';

interface IDropDown {
    visible?: boolean
}

const MoreSvg = styled(More)`
    width: 20px;
    height: 20px;
    color: #475737;
    cursor: pointer;
`

const DropDown = styled.div<IDropDown>`
    display: ${({visible}) => visible ? 'block' : 'none'};
    width: 90px;
    color: #475737;
    background-color: #f8f6f6;
    cursor: pointer;
    border-radius: 4px;
`

const Line = styled.div`
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      background-color: #f0f3e8;
    }
`

export default {
    MoreSvg,
    DropDown,
    Line
}
