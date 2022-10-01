import styled from 'styled-components';
import { ReactComponent as More } from '../../svg/more-2.svg';
import { ReactComponent as Edit } from '../../svg/edit.svg';

interface IBottom {
    hover?: boolean
}

const Container = styled.div`
  width: 200px;
  height: 200px;
  color: #78916f;
  padding: 16px;
  box-sizing: border-box;
  border: 2px solid #9f9f9d;
  border-radius: 8px;
  transition: transform 0.2s;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: white;

  &:hover {
    border-color: #475737;
    color: #7fa224;
    box-shadow: 0 14px 28px rgba(88, 86, 86, 0.25), 0 10px 10px rgba(93, 92, 92, 0.22);
  }
`

const Text = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 144px;
`

const Controls = styled.div`
    width: 24px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 20px;
    color: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
`

const MoreSvg = styled(More)`
    width: 20px;
    height: 20px;
    color: #475737
`

const Description = styled.div`
  //padding: 0 16px;
  //margin-top: 40px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #78916f;
  //word-wrap:break-word;
  //white-space: break-spaces;
`

const EditIcon = styled(Edit)<IBottom>`
    width: 16px;
    height: 16px;
    display: ${({ hover }) => hover ? 'inline-block' : 'none'};
    //position: absolute;
    //right: 15px;
    //bottom: 20px;
    color: #475737
`

const Bottom = styled.div<IBottom>`
    display: ${({ hover }) => hover ? 'block' : 'none'};
    position: relative;
  &:before {
    content: "";
    display: block;
    height: 50px;
    position: relative;
    top: 40px;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 0), #fff 75%);
  }
`

// eslint-disable-next-line
export default {
    Container,
    Title,
    MoreSvg,
    Description,
    EditIcon,
    Bottom,
    Controls,
    Text
}
