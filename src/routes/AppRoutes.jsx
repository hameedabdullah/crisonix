// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import Layout from '../features/auth/layout/Layout';

// Common
import ProtectedRoute from '../components/ProtectedRoute';

// Feature: Home
import Home from '../features/home/pages/Home';

// Feature: About
import About from '../features/about/pages/About';

// Feature: Auth
import Login from '../features/auth/pages/Login';
import CreateAccount from '../features/auth/pages/CreateAccount';
import OtpVerify from '../features/auth/pages/OtpVerify';
import Confirmation from '../features/auth/pages/Confirmation';

// Feature: Dashboard
import Dashboard from '../features/dashboard/pages/Dashboard';

// Feature: Troubleshoot
import Troubleshoot from '../features/troubleshoot/pages/Troubleshoot';
import TroubleshootNotification from '../features/troubleshoot/pages/TroubleshootNotification';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>

            <Route path="/troubleshoot" element={<Troubleshoot />} />
            <Route path="/troubleshoot-notification" element={<TroubleshootNotification />} />

            <Route element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<CreateAccount />} />
                <Route path="verify" element={<OtpVerify />} />
                <Route path="confirm" element={<Confirmation />} />
            </Route>

            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
