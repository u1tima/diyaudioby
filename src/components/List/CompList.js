import React, { Component } from 'react';
import css from './Table.module.css';

class CompList extends Component {

	render() {

		return (

			<table className={css.table}>

				<thead>
					<tr>
						<th className={css.partnumber}>PartNumber</th>

						{this.props.cols.map((col, index) => <th key={index}>{col}</th>)}

						<th>Цена</th>
						<th>Заказ</th>
						<th>Сумма</th>
						<th></th>
					</tr>
				</thead>

				<tbody>

					{this.props.children}

				</tbody>
			</table >
		);
	}
}

export default CompList;
