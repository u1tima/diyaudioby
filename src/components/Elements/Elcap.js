import React from 'react';
import Comp from '../Comp/Comp';

class Elcap extends Comp {

  render() {
    return (
      <tr>
        {this.renderPartNumber()}
        <td>{this.comp.techData[0].value}</td>
        <td>{this.comp.techData[1].value + this.comp.techData[1].units}</td>
        <td>{this.comp.techData[2].value + this.comp.techData[2].units}</td>
        <td>{this.comp.techData[4].value + this.comp.techData[4].units}</td>
        <td>{this.comp.techData[5].value + this.comp.techData[5].units}</td>
        <td>{this.comp.techData[6].value + this.comp.techData[6].units}</td>
        {this.renderPrice()}
        {this.renderControl()}
        {this.renderTotal()}
        {this.renderCartButton()}
      </tr>
    )
  }
}

export default Elcap;
