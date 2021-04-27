import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { removeElements, addEdge, Controls, Background, MiniMap } from 'react-flow-renderer';
import { Row, Col, Button } from 'reactstrap';
import { Trigger, Conditions, Delay, Send } from '../FlowNodes';
import './ReactFlow.css';

const nodeTypes = {
	triggerNode: Trigger,
	conditionsNode: Conditions,
	delayNode: Delay,
	sendNode: Send,
};

const RuleBasedFlow = () => {
	const [elements, setElements] = useState([]);
	const [reactflowInstance, setReactflowInstance] = useState(null);
	const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));

	const addNode = (name, type, style, selectable = true) => {
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
				selectable,
			})
		);
	};

	const onConnect = (params) =>
		setElements((els) =>
			addEdge({ ...params, animated: true, style: { stroke: '#1890ff', strokeWidth: '2px' } }, els)
		);

	useEffect(() => {
		const triggerBtn = document.querySelector('.trigger-node-button');
		const conditionBtn = document.querySelector('.condition-node-button');
		const delayBtn = document.querySelector('.delay-node-button');
		const sendBtn = document.querySelector('.send-node-button');

		if (reactflowInstance && elements.length > 0) {
			reactflowInstance.fitView({ padding: 0.25 });
		}

		const checkTriggerNode = elements.findIndex((elem) => elem.type === 'triggerNode');
		if (checkTriggerNode === -1) {
			triggerBtn.disabled = false;
			conditionBtn.disabled = true;
			delayBtn.disabled = true;
			sendBtn.disabled = true;
		} else {
			triggerBtn.disabled = true;
			conditionBtn.disabled = false;
			delayBtn.disabled = false;
			sendBtn.disabled = false;
		}
		console.log(JSON.stringify(elements));
	}, [reactflowInstance, elements.length, elements]);

	const onLoad = useCallback(
		(rfi) => {
			if (!reactflowInstance) {
				setReactflowInstance(rfi);
				console.log('flow loaded:', rfi);
			}
		},
		[reactflowInstance]
	);

	const flowStyles = { height: '70vh' };
	return (
		<>
			<Row className='py-2'>
				<Col sm={3}>
					<Button
						color='danger'
						className='trigger-node-button'
						onClick={() => addNode(<Trigger />, 'triggerNode', { background: '#fae1e3' }, false)}
					>
						Add Trigger node
					</Button>
				</Col>
				<Col sm={3}>
					<Button
						color='primary'
						className='condition-node-button'
						onClick={() => addNode(<Conditions />, 'conditionsNode', { width: 800, background: '#d9ebff' })}
					>
						Add Condition node
					</Button>
				</Col>
				<Col sm={3}>
					<Button
						color='warning'
						className='delay-node-button'
						onClick={() => addNode(<Delay />, 'delayNode', { width: 300, background: '#fff6da' })}
					>
						Add Delay node
					</Button>
				</Col>
				<Col sm={3}>
					<Button
						color='success'
						className='send-node-button'
						onClick={() => addNode(<Send />, 'sendNode', { width: 700, background: '#dff2e3' })}
					>
						Add Send node
					</Button>
				</Col>
			</Row>
			<ReactFlow
				elements={elements}
				style={flowStyles}
				onLoad={onLoad}
				nodeTypes={nodeTypes}
				onConnect={onConnect}
				onElementsRemove={onElementsRemove}
				deleteKeyCode={46}
			>
				<Background gap={16} color='#888' />
				<MiniMap
					nodeColor={(n) => {
						if (n.type === 'triggerNode') return '#dc3545';
						if (n.type === 'conditionsNode') return '#007bff';
						if (n.type === 'delayNode') return '#ffc107';
						if (n.type === 'sendNode') return '#28a745';
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
