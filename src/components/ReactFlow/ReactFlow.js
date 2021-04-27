import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
	ReactFlowProvider,
	removeElements,
	addEdge,
	Controls,
	Background,
	MiniMap,
} from 'react-flow-renderer';
import ButtonBar from './ButtonBar';
import './ReactFlow.css';
import { Trigger, Conditions, Delay, Send } from '../FlowNodes';

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

	const addNode = (prevY, prevH, name, type, style, selectable = true) => {
		style = {
			width: 400,
			border: '1px solid #dddddd',
			borderRadius: 10,
			padding: '20px 10px',
			background: '#ffffff',
			...style,
		};

		let offsetX = 100;
		let offsetY = 100;

		if (prevY !== -1) {
			offsetY = prevY + prevH + 50;
		}

		console.log(elements);

		setElements((els) =>
			els.concat({
				id: (els.length + 1).toString(),
				data: { label: `${name}` },
				position: { x: offsetX, y: offsetY },
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
		<ReactFlowProvider>
			<ButtonBar addNode={addNode} />
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
		</ReactFlowProvider>
	);
};

export default RuleBasedFlow;
