import React from 'react'
import { ArrowRight, X, Users, Zap, Globe } from 'lucide-react'

interface WelcomeStepProps {
  onNext: () => void
  onCancel: () => void
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext, onCancel }) => {
  return (
    <div className="text-center">
      <div className="absolute top-4 right-4">
        <button 
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cancel"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="bg-indigo-100 p-4 rounded-full inline-flex mb-6">
        <Users className="h-12 w-12 text-indigo-600" />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to ChatAndBuild Community Spaces!</h1>
      
      <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
        Join a thriving community of builders, creators, and innovators. Let's set up your profile to get started.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-left">
          <div className="bg-blue-100 p-3 rounded-lg inline-flex mb-4">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Connect with Builders</h3>
          <p className="text-gray-600 text-sm">
            Meet like-minded developers and creators from around the world.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-left">
          <div className="bg-green-100 p-3 rounded-lg inline-flex mb-4">
            <Zap className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Showcase Projects</h3>
          <p className="text-gray-600 text-sm">
            Share your work, get feedback, and find collaborators for your ideas.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 text-left">
          <div className="bg-purple-100 p-3 rounded-lg inline-flex mb-4">
            <Globe className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Join Spaces</h3>
          <p className="text-gray-600 text-sm">
            Participate in topic-focused communities that match your interests.
          </p>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onCancel}
          className="mr-4 px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Maybe Later
        </button>
        
        <button
          onClick={onNext}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Let's Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
