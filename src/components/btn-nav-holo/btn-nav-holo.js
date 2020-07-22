import React, {Component} from 'react';
import styled from 'styled-components';

const BtnNavHoloContainer = styled.div`
  position: relative;
  color: #fff;
  width: 100%;
  cursor: pointer;
  height: 65px;
  
  &:before {
    content: ""; 
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
    background: rgba(0,0,0,0);
    box-shadow:
      -1px 2px 4px 3px rgba(0, 0, 0, 0),
      inset 0 0 4px 0 rgba(255,255,255,0);
  }
  
  &:hover {
    &:before {
      background: rgba(0,0,0,0.2);
      box-shadow:
        -1px 2px 4px 3px rgba(0, 0, 0, 0.2),
        inset 0 0 5px 0 rgba(255,255,255,0.25);
    }
  }
`;

const BtnContent = styled.div`
  position: relative;
  background-color: rgba(255,255,255,0.1);
  background-image:
    linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 0),
    linear-gradient(to right, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 0);
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
  
  text-transform: uppercase;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  
  .icon {
    display: block;
    fill: rgba(255,255,255,0.5);
    width: 24px;
    height: 24px;
    transition: all 0.2s ease-out;
    filter: url(#dropshadow-1);
    margin: 15px;
  }
  
  &:hover {
    background-color: rgba(255,255,255,0.2);
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0) 66%),
      linear-gradient(to right, rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0) 33%),
      linear-gradient(to right, rgba(0, 0, 0, 0.15) 0, rgba(0, 0, 0, 0) 5px);
    transform: translate(3px, -3px);
    border-width: 0 0 0 3px;
    border-color: rgba(255,255,255,0.65);
    box-shadow:
      inset 0 0 0 0 rgba(255,255,255,0),
      -2px 0 5px 5px rgba(0, 0, 0, 0.2),
      0 0 15px 2px rgba(255, 255, 255, 0.1);
    color: rgba(255,255,255,1);
      
    .icon {
      fill: rgba(255,255,255,0.8);
      filter: url(#dropshow-glow-1);
    }
  }
`;

class BtnNavHolo extends Component {
  render() {
    return (
      <BtnNavHoloContainer className="flex-column flex-start btn">
        <BtnContent className="flex-row flex-start" color={'147,215,247'}>
          {this.props.children}
        </BtnContent>
      </BtnNavHoloContainer>
    );
  }
}

export default BtnNavHolo;
