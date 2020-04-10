/**
 * App Component.
 *
 * @package react-app-boilerplate
 */

/**
 * Internal Dependencies.
 */
import Header from './components/header';
import './style.scss';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default App;
