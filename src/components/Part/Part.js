import React from 'react';
import Comp from '../Comp/Comp';
import css from './Part.module.css';
import Details from '../Details/Details';

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
		const techData = this.comp.techData.map((tech, index) => (
			<div key={index}>
				{`${tech.name}: ${tech.value}${tech.units}`}
			</div>
		));

		return (
			<td className={css.details}>
				<Details data={techData} />
			</td>
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
