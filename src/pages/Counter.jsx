import React from 'react';

import { connect } from 'react-redux';

import { plus, plusAsync } from '../actions/counter';

import { eventlogger } from '../decorator/log'



import style from './style/counter.scss';

function test(c){
  return (target) =>{
    target.a = c
  }
}

@connect(
  select
)
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.isTestable)
    console.log(Counter.a)

    this.state = {
      plusing: false,
    };
  }
  componentDidMount(){
    this.add(2,4)
  }

  render() {
    return (
      <div className={style.counter}  style={{width:'100%',height:'500px'}}>
        <div className={style.label}>{this.props.counter.value}</div>

        <div className={style.tools}>
          <button type="button" onClick={this.handlePlus}>
            Plus
          </button>
          <button
            className={this.state.plusing ? style.disabled : ''}
            disabled={this.state.plusing}
            type="button"
            onClick={this.handlePlusAsync}
          >
            {this.state.plusing ? 'Plusing' : 'Plus Async'}
          </button>
        </div>
      </div>
    );
  }
  @eventlogger('setData','add')
  add(a, b) {
    return a + b;
  }
  
  handlePlus = e => {
    this.props.dispatch(plus(1));
    this.add(2,4)
  };

  handlePlusAsync = async e => {
    this.setState({
      plusing: true
    });

    try {
      let res = await this.props.dispatch(plusAsync(1));

      console.log('plus async: ' + res);
    } catch (err) {
      console.log('plus async fail');
    } finally {
      this.setState({
        plusing: false
      });
    }
  };
}

function select(state) {
  return {
    counter: state.counter
  };
}

// export default connect(select)(Counter);
