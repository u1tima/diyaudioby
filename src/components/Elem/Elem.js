import React from 'react';
import Comp from '../Comp/Comp';

class Elem extends Comp {
  constructor(props) {
    super(props);
    console.log(this.state)
  }

  render() {

    return (
      <div>
        {this.renderCartButton()}
      </div>
    )
   
  
  }
}

export default Elem;
