import {Navigate} from 'react-router-dom'

const ProtectedRoutes = ({ isSignedIn, children }) => {
    if (!isSignedIn) {
        return <Navigate to="/login" replace />
      }
      return children
  };
  
export default ProtectedRoutes;