import { FormGroup, Label, Input } from 'reactstrap';

const Campaign = () => {
	return (
		<>
			<FormGroup>
				<Label for='campaignSelect'>Campaign</Label>
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

export default Campaign;
