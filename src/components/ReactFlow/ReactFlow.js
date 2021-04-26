import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { addEdge, Controls, Background, MiniMap } from 'react-flow-renderer';
import { Row, Col, Button } from 'reactstrap';
import { Trigger, Conditions } from '../FlowNodes';
import './ReactFlow.css';

const nodeTypes = {
	triggerNode: Trigger,
	conditionsNode: Conditions,
};

const RuleBasedFlow = () => {
	const [elements, setElements] = useState([]);
	const [reactflowInstance, setReactflowInstance] = useState(null);

	const addNode = (name, type, style) => {
		style = {
			width: 400,
			border: '1px solid #dddddd',
			borderRadius: 10,
			padding: '20px 10px',
			background: '#ffffff',
			...style,
		};
		setElements((els) =>
			els.concat({
				id: (els.length + 1).toString(),
				data: { label: `${name}` },
				position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
				type,
				style,
			})
		);
	};

	const onConnect = (params) => setElements((els) => addEdge(params, els));

	useEffect(() => {
		const triggerBtn = document.querySelector('.trigger-node-button');
		const conditionBtn = document.querySelector('.condition-node-button');

		if (reactflowInstance && elements.length > 0) {
			reactflowInstance.fitView({ padding: 0.25 });
		}

		const checkTriggerNode = elements.findIndex((elem) => elem.type === 'triggerNode');
		if (checkTriggerNode === -1) {
			triggerBtn.disabled = false;
			conditionBtn.disabled = true;
		} else {
			triggerBtn.disabled = true;
			conditionBtn.disabled = false;
		}
		console.log(JSON.stringify(elements));
	}, [reactflowInstance, elements.length, elements]);

	const onLoad = useCallback(
		(rfi) => {
			if (!reactflowInstance) {
				setReactflowInstance(rfi);
				// console.log('flow loaded:', rfi);
			}
		},
		[reactflowInstance]
	);

	const flowStyles = { height: '70vh' };
	return (
		<>
			<Row className='py-2'>
				<Col sm={4}>
					<Button
						color='danger'
						className='trigger-node-button'
						onClick={() => addNode(<Trigger />, 'triggerNode')}
					>
						Add Trigger node
					</Button>
				</Col>
				<Col sm={4}>
					<Button
						color='success'
						className='condition-node-button'
						onClick={() => addNode(<Conditions />, 'conditionsNode', { width: 700 })}
					>
						Add Condition node
					</Button>
				</Col>
				{/* <Col sm={4}>
					<Button>Add Condition node</Button>
				</Col> */}
			</Row>
			<ReactFlow elements={elements} style={flowStyles} onLoad={onLoad} nodeTypes={nodeTypes} onConnect={onConnect}>
				<Background gap={16} color='#888' />
				<MiniMap
					nodeColor={(n) => {
						// if (n.type === 'input') return '#1890ff';
						if (n.type === 'triggerNode') return '#dc3545';
						if (n.type === 'conditionsNode') return '#28a745';
						return '#dddddd';
					}}
					nodeStrokeWidth={0}
					nodeBorderRadius={10}
				/>
				<Controls />
			</ReactFlow>
		</>
	);
};

export default RuleBasedFlow;
