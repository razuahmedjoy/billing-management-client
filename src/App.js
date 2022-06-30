import Layout from "./components/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (


      <div className="App">
        <Layout />
        <ToastContainer position="top-center"/>
      </div>

  );
}

export default App;
