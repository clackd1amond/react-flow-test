import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { addEdge, Controls, Background, MiniMap } from 'react-flow-renderer';
import { Row, Col, Button } from 'reactstrap';
import { Trigger, Send, Campaign, Delay, SendTo } from '../FlowNodes';
import './ReactFlow.css';

const nodeTypes = {
	triggerNode: Trigger,
};

const RuleBasedFlow = () => {
	const [elements, setElements] = useState([]);
	const [reactflowInstance, setReactflowInstance] = useState(null);

	const addNode = (
		name,
		type,
		style = { width: 400, border: '1px solid #dddddd', borderRadius: 10, padding: 10, background: '#ffffff' }
	) => {
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

	// useEffect(() => {
	// 	setElements([
	// 		{
	// 			id: 'trigger',
	// 			data: { label: <Trigger /> },
	// 			position: { x: 5, y: 5 },
	// 			style: { width: 400, border: '1px solid #dddddd', borderRadius: 10, padding: 10, background: '#ffffff' },
	// 			type: 'triggerNode',
	// 		},
	// 	]);
	// }, []);

	useEffect(() => {
		if (reactflowInstance && elements.length > 0) {
			reactflowInstance.fitView({ padding: 0.25 });
		}
	}, [reactflowInstance, elements.length]);

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
			<Row className='pt-2'>
				<Col sm={4}>
					<Button color='danger' onClick={() => addNode(<Trigger />, 'triggerNode')}>
						Add Trigger node
					</Button>
				</Col>
				<Col sm={4}>
					<Button color='success' disabled>
						Add Condition node
					</Button>
				</Col>
				<Col sm={4}>
					<Button disabled>Add Condition node</Button>
				</Col>
			</Row>
			<ReactFlow
				elements={elements}
				style={flowStyles}
				snapToGrid
				onLoad={onLoad}
				nodeTypes={nodeTypes}
				onConnect={onConnect}
			>
				<Background gap={16} color='#888' />
				<MiniMap
					nodeColor={(n) => {
						// if (n.type === 'input') return '#1890ff';
						if (n.id === 'trigger') return '#dc3545';
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
