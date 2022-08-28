import React from 'react';
import styles from './Button.module.css';

export class Button extends React.Component {
  render() {
    const { click } = this.props;
    return (
      <button className={styles.Button} onClick={click}>
        Load more
      </button>
    );
  }
}
export default Button;
