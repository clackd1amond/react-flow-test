import { Button } from 'reactstrap';
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
				style={{ background: '#007bff' }}
				onConnect={(params) => console.log('handle onConnect', params)}
			/>
			<p className='badge badge-pill badge-primary' style={flowStyle}>
				Conditions
			</p>
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

const ConditionsCreate = () => {
	let i = 1;
	const addConditions = (target) => {
		const block = target.closest('.btn-outline-success').previousElementSibling;
		const conditionsGroup = document.createElement('div');
		conditionsGroup.classList.add('mb-3', 'form-inline', 'd-flex', 'justify-content-center');
		conditionsGroup.setAttribute('id', `cond-group-${i++}`);
		conditionsGroup.innerHTML = `
			<div className="form-group">
				<select name="custom-field" id="custom-field" class="form-control mr-3">
					<option value="LastTransactionType">LastTransactionType</option>
					<option value="CustomerID">CustomerID</option>
					<option value="FirstName">FirstName</option>
				</select>
			</div>
			<div className="form-group mr-3">
				<select name="condition-state" id="condition-state" class="form-control mr-3">
					<option value="is">is</option>
					<option value="is not">is not</option>
					<option value="less then">less then</option>
				</select>
				<input name="condition-value" id="condition-value" type="text" class="form-control mr-3"/>
			</div>
		`;
		const removeBtn = document.createElement('button');
		removeBtn.classList.add('btn', 'btn-outline', 'btn-danger');
		removeBtn.innerHTML = '<i class="fas fa-times"></i>';
		removeBtn.addEventListener('click', () => conditionsGroup.remove());
		conditionsGroup.append(removeBtn);
		block.append(conditionsGroup);
	};
	return (
		<>
			<div className='conditions-block'></div>
			<Button outline color='success' className='mb-3' onClick={(e) => addConditions(e.target)}>
				<FontAwesomeIcon icon={faPlus} />
			</Button>
		</>
	);
};
