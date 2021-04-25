import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const NameInput = () => {
	return (
		<div className='m-4'>
			<InputGroup>
				<InputGroupAddon addonType='prepend'>
					<InputGroupText>@</InputGroupText>
				</InputGroupAddon>
				<Input placeholder='Rule name' />
			</InputGroup>
		</div>
	);
};

export default NameInput;
