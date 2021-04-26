import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormGroup, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileSignature, faBars, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

export default class BaseData extends Component {
	state = {
		lists: {
			email: ['All', 'Lotto 247 Masterlist', 'Lotto 247 Conversion List'],
			sms: [
				'All',
				'Lotto 247 SMS Masterlist',
				'Test List SMS RO',
				'Test List SMS ES',
				'Test List SMS PT',
				'Test List SMS RU',
				'Test List SMS EN',
			],
		},
		currentType: 'email',
	};

	componentDidMount() {
		this.updateList('email');
		document.querySelector('#test-email').disabled = !document.querySelector('#test-checkbox').checked;
	}

	updateList = (type) => {
		const options = this.state.lists[type];
		const listContainer = document.querySelector('#mlists');
		listContainer.innerHTML = '';

		options.forEach((option, i) => {
			const optionElem = document.createElement('option');
			optionElem.setAttribute('value', i + 1);
			optionElem.innerHTML = option;
			listContainer.append(optionElem);
		});
	};

	onChange = (event) => {
		this.setState({ currentType: event.target.value });
		this.updateList(event.target.value);
	};

	onCheckbox = (e) => {
		document.querySelector('#test-email').disabled = !e.target.checked;
	};

	render() {
		return (
			<>
				<div className='row'>
					<div className='col mb-3'>
						<InputGroup>
							<InputGroupAddon addonType='prepend'>
								<InputGroupText>
									<FontAwesomeIcon icon={faFileSignature} />
								</InputGroupText>
							</InputGroupAddon>
							<Input placeholder='Rule name' />
							<InputGroupAddon addonType='append'>
								<InputGroupText>
									<Input addon type='checkbox' aria-label='Checkbox for following text input' />
									<span className='ml-2'>Rule enabled</span>
								</InputGroupText>
							</InputGroupAddon>
						</InputGroup>
					</div>
				</div>
				<div className='row border-bottom'>
					<div className='col-md-6 mb-3'>
						<InputGroup>
							<InputGroupAddon addonType='prepend'>
								<InputGroupText>
									<FontAwesomeIcon icon={faEnvelopeOpenText} />
								</InputGroupText>
							</InputGroupAddon>
							<select
								className='custom-select'
								id='send-type'
								onChange={this.onChange}
								value={this.state.currentType}
							>
								<option value='email'>Email</option>
								<option value='sms'>SMS</option>
							</select>
						</InputGroup>
					</div>
					<div className='col-md-6 mb-3'>
						<InputGroup>
							<InputGroupAddon addonType='prepend'>
								<InputGroupText>
									<FontAwesomeIcon icon={faBars} />
								</InputGroupText>
							</InputGroupAddon>
							<select className='custom-select' id='mlists'></select>
						</InputGroup>
					</div>
				</div>
				<div className='row my-3 border-bottom'>
					<div className='col-md-6 mb-3'>
						<FormGroup check inline>
							<Label check>
								<Input type='checkbox' onChange={this.onCheckbox} id='test-checkbox' /> Send all campaigns to
								test email
							</Label>
						</FormGroup>
					</div>
					<div className='col-md-6 mb-3'>
						<Input placeholder='Email for test' id='test-email' />
					</div>
				</div>
			</>
		);
	}
}
