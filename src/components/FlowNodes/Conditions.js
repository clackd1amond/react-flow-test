import { Button, FormGroup, Label } from 'reactstrap';
import { Handle } from 'react-flow-renderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Conditions = () => {
	const flowStyle = { fontSize: '1.2rem', padding: '5px 20px' };
	return (
		<>
			<Handle
				type='target'
				position='top'
				style={{ background: '#28a745' }}
				onConnect={(params) => console.log('handle onConnect', params)}
			/>
			<FormGroup>
				<Label for='conditionsSelect' className='badge badge-pill badge-success' style={flowStyle}>
					Conditions
				</Label>
			</FormGroup>
			<ConditionsCreate />
			<Handle
				type='source'
				id='yes'
				position='bottom'
				style={{ background: '#d2f95d', left: '20%' }}
				onConnect={(params) => console.log('handle onConnect', params)}
				className='handle-yes'
			/>
			<Handle
				type='source'
				id='no'
				position='bottom'
				style={{ background: '#f96a5d', left: '80%' }}
				onConnect={(params) => console.log('handle onConnect', params)}
				className='handle-no'
			/>
		</>
	);
};
export default Conditions;

const ConditionsCreate = (block) => {
	const buttonsStyle = { borderRadius: '100%', padding: '4px 10px' };
	let i = 1;
	const addConditions = (blockSelector) => {
		const block = document.querySelector(blockSelector);
		const conditionsGroup = document.createElement('div');
		conditionsGroup.classList.add('mb-3');
		conditionsGroup.setAttribute('id', `cond-group-${i++}`);
		conditionsGroup.innerHTML = `
			<div className="form-group d-flex">
				<select name="custom-field" id="custom-field" class="form-control">
					<option value="LastTransactionType">LastTransactionType</option>
					<option value="CustomerID">CustomerID</option>
					<option value="FirstName">FirstName</option>
				</select>
				<select name="condition-state" id="condition-state" class="form-control">
					<option value="is">is</option>
					<option value="is not">is not</option>
					<option value="less then">less then</option>
				</select>
				<input name="condition-value" id="condition-value" type="text" class="form-control"/>
			</div>
		`;
		block.append(conditionsGroup);
	};
	return (
		<>
			<div className='conditions-block'></div>
			<Button
				outline
				color='success'
				size='lg'
				style={buttonsStyle}
				className='mb-3'
				onClick={() => addConditions('.conditions-block')}
			>
				<FontAwesomeIcon icon={faPlus} />
			</Button>
		</>
	);
};
