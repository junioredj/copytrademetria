import { ToastContainer } from 'react-toastify';
import {RoutesApp} from './routes'
import 'react-toastify/dist/ReactToastify.css';

import './sass/style.scss';

export function App() {
 
  return (
    <>
      <RoutesApp />
      <ToastContainer/>
      
    </>
  )
};
