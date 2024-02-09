import { HashRouter } from 'react-router-dom';

// routes
import { AllRoutes } from './index';

const Routes = () => {
    return (
        <HashRouter>
            <AllRoutes />
        </HashRouter>
    );
};

export default Routes;
