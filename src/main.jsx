import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './Authentication/Login.jsx';
import Signup from './Authentication/Signup.jsx';
import ComplaintRegistration from './components/complaint/ComplaintRegistration.jsx';
import SuppressionRegistration from './components/suppression/SuppressionRegistration .jsx';
import VeiwComplainLog from './components/complainLog/VeiwComplainLog.jsx';
import SuppressionLog from './components/suppressionLog/SuppressionLog.jsx';
import PendingComplaints from './components/pendingComplaints/PendingComplaints.jsx';
import ResolvedComplaints from './components/resolvedComplaints/ResolvedComplaints.jsx';
import ComplaintDetails from './components/complaintDetail/ComplaintDetails.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='complaint-registration' element={<ComplaintRegistration/>} />
      <Route path='suppression-registration' element={<SuppressionRegistration/>} />
      <Route path='veiw-complain-log' element={<VeiwComplainLog/>} />
      <Route path='suppression-log' element={<SuppressionLog/>} />
      <Route path='pending-complaints' element={<PendingComplaints/>} />
      <Route path='resolved-complaints' element={<ResolvedComplaints/>} />
      <Route path='/complaint/:id' element={<ComplaintDetails/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
