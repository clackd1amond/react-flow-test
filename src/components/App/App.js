import React, { Component } from 'react';
import './App.css';
import BaseData from '../BaseData';
import RuleBasedFlow from '../ReactFlow';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

export default class App extends Component {
	state = {
		flowBlock: false,
	};

	showFlowBlock = () => {
		this.setState({ flowBlock: true });
	};

	render() {
		const flowBlock = (
			<>
				<div className='alert alert-primary' role='alert'>
					Use <strong>Delete</strong> key to remove nodes. Note: Trigger node cannot be removed
				</div>
				<div className='App'>
					<RuleBasedFlow />
				</div>
			</>
		);
		const nextStepBtn = (
			<Button color='primary' size='lg' block onClick={this.showFlowBlock}>
				Next step
				<FontAwesomeIcon icon={faLongArrowAltRight} className='ml-2' />
			</Button>
		);

		const flowBlockRender = this.state.flowBlock ? flowBlock : nextStepBtn;

		return (
			<div className='container'>
				<h1 className='text-center text-primary'>MailGenesis rules nodes</h1>
				<BaseData />
				{flowBlockRender}
			</div>
		);
	}
}
