import './App.css';
import NameInput from '../NameInput';
import RuleBasedFlow from '../ReactFlow';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<>
			<h1 className='text-center text-primary'>MailGenesis rules nodes</h1>
			<NameInput />
			<div className='App'>
				<RuleBasedFlow />
			</div>
		</>
	);
}

export default App;
