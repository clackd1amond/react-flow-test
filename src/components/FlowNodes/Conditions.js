import { FormGroup, Label } from 'reactstrap';
import { Handle } from 'react-flow-renderer';

const Conditions = () => {
	const flowStyle = { fontSize: '1.2rem', padding: '5px 20px' };
	return (
		<>
			<Handle
				type='target'
				position='top'
				style={{ background: '#28a745' }}
				onConnect={(params) => console.log('handle onConnect', params)}
			/>
			<FormGroup>
				<Label for='conditionsSelect' className='badge badge-pill badge-success' style={flowStyle}>
					Conditions
				</Label>
			</FormGroup>
			<Handle
				type='source'
				id='yes'
				position='bottom'
				style={{ background: '#d2f95d', left: '20%' }}
				onConnect={(params) => console.log('handle onConnect', params)}
				className='handle-yes'
			/>
			<Handle
				type='source'
				id='no'
				position='bottom'
				style={{ background: '#f96a5d', left: '80%' }}
				onConnect={(params) => console.log('handle onConnect', params)}
				className='handle-no'
			/>
		</>
	);
};
export default Conditions;
