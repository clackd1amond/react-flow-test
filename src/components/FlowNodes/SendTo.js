import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Label } from 'reactstrap';

const SendTo = ({ onSegmentSelect }) => {
	const [rSelected, setRSelected] = useState(null);

	useEffect(() => {
		if (!rSelected) setRSelected(1);
		onSegmentSelect(rSelected);
	}, [rSelected]);

	return (
		<>
			<Label>Send to</Label>
			<ButtonGroup className='d-block mb-3'>
				<Button outline color='primary' onClick={() => setRSelected(1)} active={rSelected === 1}>
					All
				</Button>
				<Button outline color='primary' onClick={() => setRSelected(2)} active={rSelected === 2}>
					Nobody
				</Button>
				<Button outline color='primary' onClick={() => setRSelected(3)} active={rSelected === 3}>
					Segment
				</Button>
			</ButtonGroup>
		</>
	);
};

export default SendTo;
