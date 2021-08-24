import React from 'react';

export default class Botttoes extends React.Component
{
	constructor( props )
	{
		super( props );

		this.style =
		{
			width: '25rem',
		};

		this.btnStyle =
		{
			padding: '10px',
			display: 'flex',
			flexWrap: 'wrap',
		};

		this.btn =
		[
			1, 2, 3,
			4, 5, 6,
			7, 8, 9,
			0, '+', '-',
			'/', '%', '^',
			'='
		];
	};

	render()
	{
		return(
			<div>
				{
					this.btn.map( x => (
						<button
							style={this.btnStyle}
						>
							{x}
						</button>
					))
				}
			</div>
		);
	};
};
