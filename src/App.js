import React from 'react';
import './App.css';
import GlobalNav from './components/global-nav/global-nav';
import Viewport from './components/viewport/viewport';
import styled from 'styled-components';
import bg from './assets/images/sc-bg-1.png';
import GlobalSvg from './components/global-svg/global-svg';

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  
  background: url('${bg}') no-repeat center;
  background-size: cover;
  
  > div {
    position: fixed;
    height: 100%;
  }
`;

const Controls = styled.button`
  z-index: 3;
  position: fixed;
`;

const ScreenOverlay = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  backdrop-filter: ${props => props.enabled ? 'blur(4px) brightness(70%)' : ''};
  transition: all 200ms linear;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalNav: {
        open: true
      }
    };
  }

  toggleNav = (open) => {
    let globalNav = {
      ...this.state.globalNav,
      open: (typeof open === 'boolean') ? open : !this.state.globalNav.open
    };
    this.setState({
      globalNav: globalNav
    });
  };

  render() {
    return (
      <AppContainer className="App">
        <GlobalSvg />
        <GlobalNav options={this.state.globalNav} />
        <ScreenOverlay enabled={this.state.globalNav.open} />
        <Viewport className={`viewport ${this.state.globalNav.open ? 'blur' : ''}`} />
        <Controls onClick={this.toggleNav}>Nav</Controls>
      </AppContainer>
    );
  }
}

export default App;
