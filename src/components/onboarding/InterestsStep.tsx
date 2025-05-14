import React from 'react'
import { ArrowRight, ArrowLeft, X } from 'lucide-react'

interface InterestsStepProps {
  userData: {
    interests: string[]
  }
  updateUserData: (data: { interests: string[] }) => void
  onNext: () => void
  onBack: () => void
  onCancel: () => void
}

export const InterestsStep: React.FC<InterestsStepProps> = ({ 
  userData, 
  updateUserData, 
  onNext, 
  onBack,
  onCancel
}) => {
  const allInterests = [
    'Web Development',
    'Mobile Development',
    'AI & Machine Learning',
    'Data Science',
    'DevOps',
    'Blockchain',
    'Game Development',
    'UI/UX Design',
    'Cloud Computing',
    'Cybersecurity',
    'IoT',
    'AR/VR',
    'Open Source',
    'Startups',
    'Product Management',
    'Technical Writing',
    'Community Building',
    'Hackathons',
    'Mentorship',
    'Career Growth'
  ]
  
  const toggleInterest = (interest: string) => {
    const currentInterests = [...userData.interests]
    const index = currentInterests.indexOf(interest)
    
    if (index === -1) {
      updateUserData({ interests: [...currentInterests, interest] })
    } else {
      currentInterests.splice(index, 1)
      updateUserData({ interests: currentInterests })
    }
  }
  
  return (
    <div>
      <div className="absolute top-4 right-4">
        <button 
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cancel"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Interests</h2>
      <p className="text-gray-600 mb-6">Choose topics you're interested in to personalize your experience.</p>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-3 mb-4">
          {userData.interests.map((interest) => (
            <div 
              key={interest}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {interest}
              <button 
                onClick={() => toggleInterest(interest)}
                className="ml-2 text-indigo-600 hover:text-indigo-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {allInterests.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleInterest(interest)}
              className={`px-4 py-2 rounded-lg text-sm font-medium text-left ${
                userData.interests.includes(interest)
                  ? 'bg-indigo-100 text-indigo-800 border-2 border-indigo-200'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-2 border-transparent'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium py-2 px-4"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </button>
          
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
        
        <button
          onClick={onNext}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          disabled={userData.interests.length === 0}
        >
          Continue
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
