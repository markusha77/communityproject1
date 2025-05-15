import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { OnboardingFlow } from './components/signin/OnboardingFlow'
import ProfileForm from './components/profile/ProfileForm'
import { ProfileProvider } from './components/context/ProfileContext'
import './index.css'

function App() {
  const handleOnboardingComplete = () => {
    console.log('Onboarding completed')
  }

  const handleOnboardingCancel = () => {
    console.log('Onboarding cancelled')
  }

  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <OnboardingFlow 
              onComplete={handleOnboardingComplete} 
              onCancel={handleOnboardingCancel} 
            />
          } />
          <Route path="/profile" element={<ProfileForm />} />
        </Routes>
      </Router>
    </ProfileProvider>
  )
}

export default App
