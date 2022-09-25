import styled from 'styled-components';
import { ReactComponent as AddSvg } from '../../svg/add.svg';

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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ButtonWrapper,
    Title,
    Add,
    Container
}
