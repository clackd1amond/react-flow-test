import { Row, Col, Button } from 'reactstrap';
import { Trigger, Conditions, Delay, Send } from '../FlowNodes';
import { useStoreState } from 'react-flow-renderer';

const ButtonBar = ({ addNode }) => {
	const nodes = useStoreState((state) => state.nodes);

	let lastNodeH = -1;
	let lastNodeY = -1;

	if (nodes.length > 0) {
		lastNodeH = nodes[nodes.length - 1].__rf.height;
		lastNodeY = nodes[nodes.length - 1].__rf.position.y;
	}

	return (
		<Row className='py-2'>
			<Col sm={3}>
				<Button
					color='danger'
					className='trigger-node-button'
					onClick={() =>
						addNode(lastNodeY, lastNodeH, <Trigger />, 'triggerNode', { background: '#fae1e3' }, false)
					}
				>
					Add Trigger node
				</Button>
			</Col>
			<Col sm={3}>
				<Button
					color='primary'
					className='condition-node-button'
					onClick={() =>
						addNode(lastNodeY, lastNodeH, <Conditions />, 'conditionsNode', { width: 800, background: '#d9ebff' })
					}
				>
					Add Condition node
				</Button>
			</Col>
			<Col sm={3}>
				<Button
					color='warning'
					className='delay-node-button'
					onClick={() =>
						addNode(lastNodeY, lastNodeH, <Delay />, 'delayNode', { width: 300, background: '#fff6da' })
					}
				>
					Add Delay node
				</Button>
			</Col>
			<Col sm={3}>
				<Button
					color='success'
					className='send-node-button'
					onClick={() =>
						addNode(lastNodeY, lastNodeH, <Send />, 'sendNode', { width: 700, background: '#dff2e3' })
					}
				>
					Add Send node
				</Button>
			</Col>
		</Row>
	);
};

export default ButtonBar;
