import { FormGroup, Label, Input, Col } from 'reactstrap';

const Delay = () => {
	return (
		<>
			<FormGroup row>
				<Col sm={12}>
					<Label for='delaySelect'>Delay</Label>
				</Col>
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
		</>
	);
};

export default Delay;
