import React from 'react';

export default class Bottoes extends React.Component
{
	constructor( props )
	{
		super( props );

		this.style =
		{
			width: '27.7rem',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'wrap',
		};

		this.btnStyle =
		{
			padding: '1rem 2.52rem',
			margin: '0.2rem',
			fontSize: '2rem',
		};

		this.btn =
		[
			7, 8, 9,'+',
			4, 5, 6, '-',
			1, 2, 3, 'x',
			'.', 0, '/', '=',
		];
	};

	calcular( op )
	{
		let res = eval( op );

		return res;
	};

	render()
	{
		return(
			<div style={this.style}>
				{
					this.btn.map( x => (
						<button
							style={this.btnStyle}
							onClick={() => this.props.setOp( () =>
							{
								if(x === '=')
								{
									return this.calcular( this.props.op );
								}
								else
									return this.props.op + x;
							}) }
						>
							{x}
						</button>
					))
				}
			</div>
		);
	};
};
