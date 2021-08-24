import React, {useState} from 'react';
import Bottoes from './comp/bottoes.js';
import Visor from './comp/visor.js';

export default function App()
{
	const [op, setOp] = useState();

	const style =
	{
		backgroundColor: 'rgba(5, 5, 5, 0.5)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	};

	return(
		<div style={style}>
			<h1>Calculadora</h1>
			<Visor op={op} setOp={setOp}/>
			<Bottoes/>
		</div>
	);
};
