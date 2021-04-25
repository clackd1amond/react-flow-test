import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input, Col } from 'reactstrap';

const Delay = () => {
	return (
		<>
			<FormGroup row>
				<Col sm={12}>
					<Label for='delaySelect'>Delay</Label>
				</Col>
				<Col sm={6}>
					<Input type='number' value={0} />
				</Col>
				<Col sm={6}>
					<Input type='select' name='select' id='delaySelect'>
						<option>Minutes</option>
						<option>Hours</option>
						<option selected>Days</option>
					</Input>
				</Col>
			</FormGroup>
		</>
	);
};

export default Delay;
