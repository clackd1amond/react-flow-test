import { FormGroup, Label, Input } from 'reactstrap';
import { Handle } from 'react-flow-renderer';

const Send = () => {
	const flowStyle = { fontSize: '1.2rem', padding: '5px 20px' };

	return (
		<>
			<Handle
				type='target'
				position='top'
				style={{ background: '#28a745' }}
				onConnect={(params) => console.log('handle onConnect', params)}
			/>
			<p className='badge badge-pill badge-success' style={flowStyle}>
				Send
			</p>
			<FormGroup>
				<Input type='select' name='select' id='campaignSelect'>
					<option>L247_Conversion_RNP_EN_Day1</option>
					<option>L247_Conversion_RNP_EN_Day4</option>
					<option>L247_Conversion_RNP_EN_Day7</option>
					<option>L247_Conversion_RNP_EN_Day14</option>
					<option>L247_Conversion_RNP_EN_Day20</option>
					<option>L247_Conversion_RNP_EN_Day30</option>
				</Input>
			</FormGroup>
			<FormGroup check className='d-flex'>
				<Label check className='mr-5'>
					<Input type='checkbox' defaultChecked /> Track opens
				</Label>
				<Label check className='mr-5'>
					<Input type='checkbox' defaultChecked /> Track clicks
				</Label>
				<Label check className='mr-5'>
					<Input type='checkbox' /> Ignore unsubscribed
				</Label>
				<Label check className='mr-5'>
					<Input type='checkbox' /> Include unconfirmed
				</Label>
			</FormGroup>
		</>
	);
};

export default Send;
