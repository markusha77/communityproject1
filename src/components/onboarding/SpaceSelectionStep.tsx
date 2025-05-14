import React from 'react'
import { ArrowRight, ArrowLeft, X, Users, Code, Lightbulb, Rocket, Zap, Globe } from 'lucide-react'

interface SpaceSelectionStepProps {
  selectedSpaces: string[]
  updateSpaces: (spaces: string[]) => void
  onNext: () => void
  onBack: () => void
  onCancel: () => void
}

export const SpaceSelectionStep: React.FC<SpaceSelectionStepProps> = ({ 
  selectedSpaces, 
  updateSpaces, 
  onNext, 
  onBack,
  onCancel
}) => {
  const spaces = [
    {
      id: 'web-dev',
      name: 'Web Development',
      description: 'Discuss frontend, backend, and everything web related',
      icon: <Globe className="h-6 w-6" />,
      members: 2453,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Share AI projects, discuss ML techniques and latest research',
      icon: <Lightbulb className="h-6 w-6" />,
      members: 1872,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'open-source',
      name: 'Open Source',
      description: 'Collaborate on open source projects and find contributors',
      icon: <Code className="h-6 w-6" />,
      members: 3241,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'startups',
      name: 'Startups',
      description: 'Connect with founders, share your startup journey',
      icon: <Rocket className="h-6 w-6" />,
      members: 1563,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'hackathons',
      name: 'Hackathons',
      description: 'Find teammates, share hackathon projects and experiences',
      icon: <Zap className="h-6 w-6" />,
      members: 982,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      id: 'community',
      name: 'Community Building',
      description: 'Discuss community management, events, and engagement',
      icon: <Users className="h-6 w-6" />,
      members: 754,
      color: 'bg-red-100 text-red-600'
    }
  ]
  
  const toggleSpace = (spaceId: string) => {
    const current = [...selectedSpaces]
    const index = current.indexOf(spaceId)
    
    if (index === -1) {
      updateSpaces([...current, spaceId])
    } else {
      current.splice(index, 1)
      updateSpaces(current)
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
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Community Spaces</h2>
      <p className="text-gray-600 mb-6">Select spaces to join based on your interests and goals.</p>
      
      <div className="mb-6 space-y-4">
        {spaces.map((space) => (
          <div 
            key={space.id}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedSpaces.includes(space.id)
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleSpace(space.id)}
          >
            <div className="flex items-start">
              <div className={`p-3 rounded-lg ${space.color} mr-4`}>
                {space.icon}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-semibold text-gray-900">{space.name}</h3>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    {space.members.toLocaleString()}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">{space.description}</p>
              </div>
              
              <div className="ml-4 flex items-center">
                <div className={`w-5 h-5 rounded-full border ${
                  selectedSpaces.includes(space.id)
                    ? 'border-indigo-600 bg-indigo-600'
                    : 'border-gray-300'
                } flex items-center justify-center`}>
                  {selectedSpaces.includes(space.id) && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
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
          disabled={selectedSpaces.length === 0}
        >
          Continue
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
