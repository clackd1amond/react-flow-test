import React from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';
import { Triggers, Send } from '../FlowNodes';

const elements = [
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
		data: { label: 'Campaign' },
		position: { x: 300, y: 170 },
		sourcePosition: 'left',
		targetPosition: 'top',
		style: { width: 450 },
	},
	{
		id: '4',
		data: { label: 'Delay' },
		position: { x: 5, y: 170 },
		sourcePosition: 'bottom',
		targetPosition: 'right',
		style: { width: 250 },
	},
	{
		id: '5',
		data: { label: 'Send to' },
		position: { x: 5, y: 300 },
		targetPosition: 'top',
		style: { width: 600 },
		type: 'output',
	},
	{ id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#1890ff' } },
	{ id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#1890ff' } },
	{ id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#1890ff' } },
	{ id: 'e4-5', source: '4', target: '5', animated: true, style: { stroke: '#1890ff' } },
	// { id: '3', data: { label: 'Finish' }, position: { x: 450, y: 100 }, type: 'output' },
	// { id: 'e1-2', source: '1', target: '2', animated: true },
	// { id: 'e1-3', source: '1', target: '3', animated: false },
];

const flowStyles = { height: 600 };

const BasicFlow = () => (
	<ReactFlow elements={elements} style={flowStyles}>
		{/* <Background variant='dots' gap={16} size={0.5} color={'purple'} /> */}
	</ReactFlow>
);

export default BasicFlow;
