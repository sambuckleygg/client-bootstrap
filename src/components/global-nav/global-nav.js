import React, {Component} from 'react';
import styled from 'styled-components';
import BtnNavHolo from '../btn-nav-holo/btn-nav-holo';
import { ReactComponent as IconRocket1 } from '../../icons/icon-rocket-1.svg';
import { ReactComponent as IconTire1 } from '../../icons/icon-tire-1.svg';
import { ReactComponent as IconTarget1 } from '../../icons/icon-target-1.svg';
import { ReactComponent as IconSocial1 } from '../../icons/icon-social-1.svg';
import { ReactComponent as IconPickaxe1 } from '../../icons/icon-pickaxe-1.svg';
import { ReactComponent as IconMore1 } from '../../icons/icon-more-1.svg';
import { ReactComponent as IconGamepad1 } from '../../icons/icon-gamepad-1.svg';
import { ReactComponent as IconSettings1 } from '../../icons/icon-settings-1.svg';
import { ReactComponent as IconPower1 } from '../../icons/icon-power-1.svg';
import BtnNav from '../btn-nav/btn-nav';

const GlobalNavContainer = styled.div`
  z-index: 3;
  display: flex;
  background: radial-gradient(353.8% 57.29% at 50% 50%, rgba(147, 215, 247, 0.25) 0%, rgba(147, 215, 247, 0.1) 100%);
  color: #fff;
  width: ${props => props.open ? '217px' : '58px'};
  transition:
    all
    200ms
    ${props => props.open ? 'ease-out' : 'ease-in-out'};
    
  .shard-buttons {
    & > .btn {
      height: 65px;
      margin: 2px 0;
    }
  }
  
  .icon-buttons {
    & > .btn {
      .text {
        position: absolute;
        left: 52px;
        top: 50%;
        transform: translateY(-50%);
        width: calc(217px - (52px + 12px));
        transition: opacity 200ms ${props => props.open ? 'ease-out' : 'ease-in-out'};
        opacity: ${props => props.open ? 1 : 0};
      }
    }
  }
`;

const HrButtonCap = styled.div`
  position: relative;
  width: 100%;
  height: 0px;
  pointer-events: none;
  
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgba(138, 204, 222, 0.22);
  }
`;

class GlobalNav extends Component {
  render() {
    return (
      <GlobalNavContainer open={this.props.options.open}>
        <div className="flex-column flex-end flex-grow">
          <div className="flex-column flex-center flex-grow">
            <div className="flex-column shard-buttons icon-buttons">
              <BtnNavHolo>
                <IconRocket1 className="icon" />
                <div className="text">Flight Systems</div>
              </BtnNavHolo>
              <BtnNavHolo>
                <IconTire1 className="icon" />
                <div className="text">Ground Systems</div>
              </BtnNavHolo>
              <BtnNavHolo>
                <IconTarget1 className="icon" />
                <div className="text">Combat</div>
              </BtnNavHolo>
              <BtnNavHolo>
                <IconSocial1 className="icon" />
                <div className="text">Social</div>
              </BtnNavHolo>
              <BtnNavHolo>
                <IconPickaxe1 className="icon" />
                <div className="text">Mining</div>
              </BtnNavHolo>
              <BtnNav>
                <IconMore1 className="icon" />
                <div className="text">More Shards</div>
              </BtnNav>
            </div>
          </div>
          <div className="flex-column flex-end flex-shrink icon-buttons">
            <BtnNav>
              <IconGamepad1 className="icon" />
              <div className="text">Games</div>
            </BtnNav>
            <BtnNav>
              <IconSettings1 className="icon" />
              <div className="text">Settings</div>
            </BtnNav>
            <HrButtonCap />
            <BtnNav>
              <IconPower1 className="icon" />
              <div className="text">Logout</div>
            </BtnNav>
          </div>
        </div>
      </GlobalNavContainer>
    );
  }
}

export default GlobalNav;
