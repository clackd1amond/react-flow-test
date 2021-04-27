import { FormGroup, Label, Input, Col } from 'reactstrap';
import { Handle } from 'react-flow-renderer';

const Delay = () => {
	const flowStyle = { fontSize: '1.2rem', padding: '5px 20px' };
	return (
		<>
			<Handle
				type='target'
				position='top'
				style={{ background: '#ffc107' }}
				onConnect={(params) => console.log('handle onConnect', params)}
			/>
			<p className='badge badge-pill badge-warning' style={flowStyle}>
				Delay
			</p>
			<FormGroup row>
				<Col sm={6}>
					<Input type='number' defaultValue={3} />
				</Col>
				<Col sm={6}>
					<Input type='select' name='select' id='delaySelect' defaultValue={'Days'}>
						<option>Minutes</option>
						<option>Hours</option>
						<option>Days</option>
					</Input>
				</Col>
			</FormGroup>
			<Handle
				type='source'
				position='bottom'
				style={{ background: '#ffc107' }}
				onConnect={(params) => console.log('handle onConnect', params)}
			/>
		</>
	);
};

export default Delay;
