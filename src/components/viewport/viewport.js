import React, {Component} from 'react';
import styled from 'styled-components';

const ViewportContainer = styled.div`
  width: calc(100% - 100px);
  right: 0;
  z-index: 1;
  color: #fff;
`;

class Viewport extends Component {
  render() {
    return (
      <ViewportContainer>
        {/*<Shard appState={this.appState} />*/}
        Viewport
      </ViewportContainer>
    );
  }
}

export default Viewport;
