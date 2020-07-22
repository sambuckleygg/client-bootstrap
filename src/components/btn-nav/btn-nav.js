import React, {Component} from 'react';
import styled from 'styled-components';

const BtnNavContainer = styled.div`
  position: relative;
  color: #fff;
  width: 100%;
  cursor: pointer;
  height: 46px;
`;

const BtnContent = styled.div`
  position: relative;
  height: 100%;
  align-items: center;
  transform: translate(0, 0);
  transition: all 0.2s ease-out;
  padding-left: 2px;  
  text-transform: uppercase;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  
  .icon {
    display: block;
    fill: rgba(255,255,255,0.5);
    transition: all 0.2s ease-out;
    width: 24px;
    height: 24px;
    filter: url(#dropshadow-1);
    margin: 15px;
  }
  
  &:hover {
    color: rgba(255,255,255,1);
      
    .icon {
      fill: rgba(255,255,255,0.8);
      filter: url(#dropshow-glow-1);
    }
  }
`;

class BtnNav extends Component {
  render() {
    return (
      <BtnNavContainer className="flex-column flex-start btn">
        <BtnContent className="flex-row flex-start">
          {this.props.children}
        </BtnContent>
      </BtnNavContainer>
    );
  }
}

export default BtnNav;
