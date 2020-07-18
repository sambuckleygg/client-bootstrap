import React, {Component} from 'react';
import styled from 'styled-components';
import BtnHoloNav from '../btn-holo-nav/btn-holo-nav';

const GlobalNavContainer = styled.div`
  z-index: 3;
  display: flex;
  background: radial-gradient(353.8% 57.29% at 50% 50%, rgba(147, 215, 247, 0.25) 0%, rgba(147, 215, 247, 0.1) 100%);
  color: #fff;
  width: ${props => props.open ? '300px' : '100px'};
  transition:
    all
    200ms
    ${props => props.open ? 'ease-out' : 'ease-in-out'};;
    
  .shard-buttons > .btn {
    margin: 2px 0;
  }
`;

class GlobalNav extends Component {
  render() {
    return (
      <GlobalNavContainer open={this.props.options.open}>
        <div className="flex-column flex-end flex-grow">
          <div className="flex-column flex-center flex-grow">
            <div className="flex-column shard-buttons">
              <BtnHoloNav></BtnHoloNav>
              <BtnHoloNav></BtnHoloNav>
            </div>
          </div>
          <div className="flex-column flex-end flex-shrink">
            <BtnHoloNav></BtnHoloNav>
            <BtnHoloNav></BtnHoloNav>
            <hr/>
            <BtnHoloNav></BtnHoloNav>
          </div>
        </div>
      </GlobalNavContainer>
    );
  }
}

export default GlobalNav;
