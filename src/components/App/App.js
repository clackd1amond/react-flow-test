import './App.css';
import BaseData from '../BaseData';
import RuleBasedFlow from '../ReactFlow';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<div className='container'>
			<h1 className='text-center text-primary'>MailGenesis rules nodes</h1>
			<BaseData />
			<div className='App'>
				<RuleBasedFlow />
			</div>
		</div>
	);
}

export default App;
