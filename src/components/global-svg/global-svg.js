import React, {Component} from 'react';

class GlobalSvg extends Component {
  render() {
    return (
      <svg height="0" width="0" style={{'display': 'none'}}>
        <defs>
          <filter id="dropshadow-1">
            <feGaussianBlur in="SourceAlpha" stdDeviation="0"/>
            <feOffset dx="1" dy="3" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.18"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="dropshow-glow-1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
            <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
            <feOffset dx="1" dy="3" result="offsetblur"/>
            <feMerge>
              <feMergeNode in="offsetblur" />
              <feMergeNode in="SourceGraphic"/>
              <feMergeNode in="blur" />
            </feMerge>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.75" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
    );
  }
}

export default GlobalSvg;
