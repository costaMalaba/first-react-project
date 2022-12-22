import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button } from 'react-bootstrap';

const notify = () => {toast.success("Congratulation..!");}

function App() {
  return (
    <div className="App">
      <h1>First React Project for Me</h1>
      <Button variant="success" className='mt-3' onClick={notify}>Notify</Button>
      <ToastContainer />
    </div>
  );
}

export default App;
