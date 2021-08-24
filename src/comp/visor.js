import React from 'react';

export default class Visor extends React.Component
{
	constructor( props )
	{
		super( props );

		this.style =
		{
			backgroundColor: 'rgba(2, 2, 2, 0.2)',
			padding: '1rem',
			textAlign: 'center',
			width: '25rem',
		};
	};

	render()
	{
		return(
				<input
					style={this.style}
					type="text"
					onChange={(e) => this.props.setOp(e.target.value)}
				/>
		);
	};
};
