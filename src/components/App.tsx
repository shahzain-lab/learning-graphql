import { useContext } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GlobalContext } from '../context/AppContext';
import AppRoutes from '../Routes/Routes';
import ErrorFallback from './ErrorBoundry';


function App() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div className="App">
      <div className="container">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            dispatch({ type: 'SEARCH_INPUT_VALUE', payload: '' })
          }
          }
        >
          <AppRoutes />
        </ErrorBoundary>
      </div>
    </div>
  )
}
export default App;
