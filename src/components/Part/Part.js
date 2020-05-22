import React from 'react';
import Comp from '../Comp/Comp';
import css from './Part.module.css';

class Part extends Comp {

	constructor(props) {
		super(props);
		this.part = this.props.part;
	}

	renderPartPosition() {
		return (
			<td className={css.pos}>{this.part.position}</td>
		)
	}

	renderAsmQnt() {
		return (
			<td className={css.asmQnt}>{this.part.asmQnt}</td>
		)
	}

	getFullInfo() {
		return (
			<td className={css.fullInfo}>{this.part.asmQnt}</td>
		)
	}

	render() {
		return (
			<tr>
				{this.renderPartPosition()}
				{this.renderPartName()}
				{this.getFullInfo()}
				{this.renderAsmQnt()}
				{this.renderPrice()}
				{this.renderControl()}
				{this.renderTotal()}
				{this.renderCartButton()}
			</tr>

		)
	}
}

export default Part
