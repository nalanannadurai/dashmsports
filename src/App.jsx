import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Home from './pages/Home';
import Layout from './components/Layout';
import FrontOfficeEvaluation from './pages/services/FrontOfficeEvaluation';
import AthleticDepartmentStrategy from './pages/services/AthleticDepartmentStrategy';
import PerformanceOperationsAudit from './pages/services/PerformanceOperationsAudit';
import DataAnalyticsAdvisory from './pages/services/DataAnalyticsAdvisory';
import OrganizationalAlignment from './pages/services/OrganizationalAlignment';
import RecruitingTalentStrategy from './pages/services/RecruitingTalentStrategy';
import Program from './pages/tiers/Program';
import Team from './pages/tiers/Team';
import Individual from './pages/tiers/Individual';
import WhoWeServe from './pages/WhoWeServe';
import Solutions from './pages/Solutions';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services/front-office-evaluation" element={<FrontOfficeEvaluation />} />
        <Route path="/services/athletic-department-strategy" element={<AthleticDepartmentStrategy />} />
        <Route path="/services/performance-operations-audit" element={<PerformanceOperationsAudit />} />
        <Route path="/services/data-analytics-advisory" element={<DataAnalyticsAdvisory />} />
        <Route path="/services/organizational-alignment-review" element={<OrganizationalAlignment />} />
        <Route path="/services/recruiting-talent-strategy" element={<RecruitingTalentStrategy />} />
        <Route path="/tiers/program" element={<Program />} />
        <Route path="/tiers/team" element={<Team />} />
        <Route path="/tiers/individual" element={<Individual />} />
        <Route path="/who-we-serve" element={<WhoWeServe />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App