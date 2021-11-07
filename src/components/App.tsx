import { ErrorBoundary } from 'react-error-boundary'
import AppRoutes from '../Routes/Routes';
import ErrorFallback from './ErrorBoundry';


function App() {

  return (
    <div className="App">
      <div className="container">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <AppRoutes />
        </ErrorBoundary>
      </div>
    </div>
  )
}
export default App;
