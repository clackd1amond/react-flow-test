import React from 'react';
import ReactFlow, { Background } from 'react-flow-renderer';

const elements = [
	{ id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 }, type: 'input' },
	{ id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 }, style: { background: '#ffcc50', width: 300 } },
	{ id: '3', data: { label: 'Finish' }, position: { x: 450, y: 100 }, type: 'output' },
	{ id: 'e1-2', source: '1', target: '2', animated: true },
	{ id: 'e1-3', source: '1', target: '3', animated: false },
];

const flowStyles = { height: 600 };

const BasicFlow = () => (
	<ReactFlow elements={elements} style={flowStyles}>
		<Background variant='dots' gap={16} size={0.5} color={'purple'} />
	</ReactFlow>
);

export default BasicFlow;
