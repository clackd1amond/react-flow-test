import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'react-flow-renderer';
import { Triggers, Send, Campaign, Delay, SendTo } from '../FlowNodes';
import './ReactFlow.css';

const BasicFlow = () => {
	const [elements, setElements] = useState([]);
	const [reactflowInstance, setReactflowInstance] = useState(null);

	useEffect(() => {
		const onSegmentSelect = (arg) => {
			setElements((els) =>
				els.map((e) => {
					if (e.id === '6' || e.id === 'e5-6') {
						if (arg === 3) {
							return {
								...e,
								isHidden: false,
							};
						} else {
							return {
								...e,
								isHidden: true,
							};
						}
					}
					return e;
				})
			);
		};

		setElements([
			{
				id: '1',
				data: { label: <Triggers /> },
				position: { x: 5, y: 5 },
				sourcePosition: 'right',
				style: { width: 250 },
				type: 'input',
			},
			{
				id: '2',
				data: { label: <Send /> },
				position: { x: 300, y: 5 },
				sourcePosition: 'bottom',
				targetPosition: 'left',
				style: { width: 450 },
			},
			{
				id: '3',
				data: { label: <Campaign /> },
				position: { x: 300, y: 170 },
				sourcePosition: 'left',
				targetPosition: 'top',
				style: { width: 450 },
			},
			{
				id: '4',
				data: { label: <Delay /> },
				position: { x: 5, y: 205 },
				sourcePosition: 'bottom',
				targetPosition: 'right',
				style: { width: 250 },
			},
			{
				id: '5',
				data: { label: <SendTo onSegmentSelect={onSegmentSelect} /> },
				position: { x: 5, y: 400 },
				sourcePosition: 'bottom',
				targetPosition: 'top',
				style: { width: 745 },
			},
			{
				id: '6',
				type: 'output',
				position: { x: 5, y: 550 },
				data: { label: `Segments` },
				style: { width: 745 },
			},
			{ id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#1890ff' } },
			{ id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#1890ff' } },
			{ id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#1890ff' } },
			{
				id: 'e4-5',
				source: '4',
				target: '5',
				animated: true,
				style: { stroke: '#1890ff' },
				label: '3 days after CustomerID triggers "L247_Conversion_RNP_EN_Day1" will be sent only once to:',
				labelBgPadding: [8, 4],
				labelBgBorderRadius: 4,
				labelBgStyle: { fill: '#b8fc88', color: '#fff', fillOpacity: 0.7 },
			},
			{
				id: 'e5-6',
				source: '5',
				target: '6',
				animated: true,
				style: { stroke: '#1890ff' },
				label: 'Choose segment conditions',
				labelBgPadding: [8, 4],
				labelBgBorderRadius: 4,
				labelBgStyle: { fill: '#fcec73', color: '#fff', fillOpacity: 0.7 },
			},
			// { id: '3', data: { label: 'Finish' }, position: { x: 450, y: 100 }, type: 'output' },
			// { id: 'e1-2', source: '1', target: '2', animated: true },
			// { id: 'e1-3', source: '1', target: '3', animated: false },
		]);
	}, []);

	useEffect(() => {
		if (reactflowInstance && elements.length > 0) {
			reactflowInstance.fitView();
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
		<ReactFlow elements={elements} style={flowStyles} snapToGrid onLoad={onLoad}>
			{/* <Background gap={16} color='#888' /> */}
			<MiniMap
				nodeColor={(n) => {
					if (n.type === 'input') return '#1890ff';
					return '#dddddd';
				}}
				nodeStrokeWidth={0}
				nodeBorderRadius={10}
			/>
			<Controls />
		</ReactFlow>
	);
};

export default BasicFlow;
