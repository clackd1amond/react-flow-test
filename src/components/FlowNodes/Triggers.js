import 'bootstrap/dist/css/bootstrap.css';
import { FormGroup, Label, Input } from 'reactstrap';

const Triggers = () => {
	return (
		<>
			<FormGroup>
				<Label for='triggersSelect'>Triggers</Label>
				<Input type='select' name='select' id='triggersSelect'>
					<option>CustomerID</option>
					<option>FTD</option>
					<option>MarketingOptInInd</option>
				</Input>
			</FormGroup>
		</>
	);
};

export default Triggers;
