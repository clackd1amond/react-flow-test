import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input } from 'reactstrap';
import { Handle } from 'react-flow-renderer';

const Trigger = () => {
	const flowStyle = { fontSize: '1.2rem', padding: '5px 20px' };
	return (
		<>
			<Handle
				type='source'
				position='bottom'
				style={{ background: '#dc3545' }}
				onConnect={(params) => console.log('handle onConnect', params)}
			/>
			<FormGroup>
				<Label for='triggersSelect' className='badge badge-pill badge-danger' style={flowStyle}>
					Trigger
				</Label>
				<Input type='select' name='select' id='triggersSelect'>
					<option>CustomerID</option>
					<option>FTD</option>
					<option>MarketingOptInInd</option>
				</Input>
			</FormGroup>
		</>
	);
};

export default Trigger;
