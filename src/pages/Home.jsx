import React from 'react';

import style from './style/home.scss';
import { Button } from 'antd';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={style.home}>
            <Button type="primary">Button</Button>
          </div>;
  }
}
