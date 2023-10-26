
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
        <Outlet/>
      </Provider>
    </div>
  );
}

export default App;