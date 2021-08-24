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
			color: 'white',
			fontWeight: 'bold',
			fontSize: '1rem',
			width: '25rem',
			marginBottom: '.5rem',
		};
	};

	render()
	{
		return(
			<div style={this.style}>
				{this.props.op}
			</div>
		);
	};
};
