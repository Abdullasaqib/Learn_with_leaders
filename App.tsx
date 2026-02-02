
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { MyPrograms } from './pages/MyPrograms';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';
import { Verification } from './pages/Verification';
import { InterestSelection } from './pages/InterestSelection';
import { Signup } from './pages/Signup';
import { ExplorePrograms } from './pages/ExplorePrograms';
import { Certificates } from './pages/Certificates';
import { Profile } from './pages/Profile';
import { ApplicationReview } from './pages/ApplicationReview';
import { ApplicationForm } from './pages/ApplicationForm';
import { PaymentPage } from './pages/PaymentPage';

type AuthView = 'login' | 'signup' | 'forgot-password' | 'verification' | 'onboarding-interests';
type SubView = 'application-form' | 'application-review' | 'payment' | null;

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState<AuthView>('login');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentSubView, setCurrentSubView] = useState<SubView>(null);

  const handleLoginAttempt = () => setAuthView('verification');
  const handleVerifySuccess = () => setAuthView('onboarding-interests');
  const handleOnboardingComplete = () => setIsAuthenticated(true);

  const navigateToTab = (tab: string) => {
    setActiveTab(tab);
    setCurrentSubView(null);
  };

  const renderContent = () => {
    if (currentSubView === 'application-form') {
      return (
        <ApplicationForm 
          onSubmit={() => setCurrentSubView('application-review')} 
          onClear={() => setCurrentSubView(null)} 
        />
      );
    }
    if (currentSubView === 'application-review') {
      return (
        <ApplicationReview 
          onSubmit={() => setCurrentSubView('payment')}
          onBack={() => setCurrentSubView('application-form')}
        />
      );
    }
    if (currentSubView === 'payment') {
      return (
        <PaymentPage 
          onSuccess={() => {
            setCurrentSubView(null);
            setActiveTab('my-programs');
          }}
          onBack={() => setCurrentSubView('application-review')}
        />
      );
    }

    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'my-programs': return <MyPrograms />;
      case 'explore': 
        return <ExplorePrograms onStartApplication={() => setCurrentSubView('application-form')} />;
      case 'profile': return <Profile />;
      case 'certificates': return <Certificates />;
      default: return <Dashboard />;
    }
  };

  if (!isAuthenticated) {
    switch (authView) {
      case 'signup':
        return <Signup onSignup={handleLoginAttempt} onBackToLogin={() => setAuthView('login')} />;
      case 'forgot-password':
        return <ForgotPassword onBackToLogin={() => setAuthView('login')} />;
      case 'verification':
        return <Verification onVerify={handleVerifySuccess} onBackToLogin={() => setAuthView('login')} />;
      case 'onboarding-interests':
        return <InterestSelection onComplete={handleOnboardingComplete} />;
      default:
        return <Login 
          onLogin={handleLoginAttempt} 
          onForgotPassword={() => setAuthView('forgot-password')} 
          onSignup={() => setAuthView('signup')}
        />;
    }
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={navigateToTab}>
      {renderContent()}
    </Layout>
  );
};

export default App;
