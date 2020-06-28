import React from 'react';

import { connect } from 'react-redux';

import { plus, plusAsync } from '../actions/counter';



import Draggable, {DraggableCore} from 'react-draggable';
import { elseTo } from '../decorator/packaging'



// @testable(false)
@elseTo
class Draggables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plusing: false
    };
  }
 
  render() {
    return (
      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div style={{width:'100%',height:'500px'}}>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}

function select(state) {
  return {
    counter: state.counter
  };
}

export default connect(select)(Draggables);
