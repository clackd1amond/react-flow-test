import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Label, Input } from 'reactstrap';

const Send = () => {
	const [rSelected, setRSelected] = useState(null);

	useEffect(() => {
		if (!rSelected) setRSelected(1);
	}, [rSelected]);

	const dropdown = (
		<Input type='select' name='select' id='triggersSelect'>
			<option>CustomerID</option>
			<option>FTD</option>
			<option>MarketingOptInInd</option>
		</Input>
	);

	const showDropDown = rSelected === 3 ? dropdown : null;

	return (
		<>
			<Label>Send</Label>
			<ButtonGroup className='d-block mb-3'>
				<Button outline color='primary' onClick={() => setRSelected(1)} active={rSelected === 1}>
					Only once
				</Button>
				<Button outline color='primary' onClick={() => setRSelected(2)} active={rSelected === 2}>
					On every trigger
				</Button>
				<Button outline color='primary' onClick={() => setRSelected(3)} active={rSelected === 3}>
					For every unique
				</Button>
			</ButtonGroup>
			{showDropDown}
		</>
	);
};

export default Send;
