// import logo from './logo.svg';
import './App.css';
import './assets/css/styles.css';
import Routing from './components/Routing';
import { Provider } from 'react-redux'
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
