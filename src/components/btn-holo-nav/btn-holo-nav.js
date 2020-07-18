import React, {Component} from 'react';
import styled from 'styled-components';

const BtnHoloNavContainer = styled.div`
  color: #fff;
  width: 100%;
  cursor: pointer;
  height: 65px;
`;

const BtnContent = styled.div`
  position: relative;
  background-color: rgba(255,255,255,0.2);
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 0),
    linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 0);
  height: 100%;
  align-items: center;
  transform: translate(0, 0);
  transition: all 0.2s ease-out;
  
  border-width: 0 0 0 2px;
  border-style: solid;
  border-color: rgba(${props => props.color},0.65);
  box-shadow:
    inset 0 0 0 0 rgba(255,255,255,0),
    0 0 5px 5px rgba(0, 0, 0, 0),
    0 0 15px 15px rgba(255, 255, 255, 0);
  
  &:hover {
    background-color: rgba(255,255,255,0.4);
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0) 30px),
      linear-gradient(to right, rgba(0, 0, 0, 0.25) 0, rgba(0, 0, 0, 0) 5px);
    transform: translate(3px, -3px);
    border-width: 0 0 0 3px;
    border-color: rgba(255,255,255,0.65);
    box-shadow:
      inset 0 0 0 0 rgba(255,255,255,0),
      -2px 0 5px 5px rgba(0, 0, 0, 0.2),
      0 0 15px 10px rgba(255, 255, 255, 0.1);
  }
`;

class BtnHoloNav extends Component {
  render() {
    return (
      <BtnHoloNavContainer className="flex-column flex-center btn">
        <BtnContent className="flex-row flex-center" color={'147,215,247'}>
          {this.props.children}
        </BtnContent>
      </BtnHoloNavContainer>
    );
  }
}

export default BtnHoloNav;
