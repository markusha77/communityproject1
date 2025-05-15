import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the Profile type
export interface Profile {
  id?: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  website: string;
  github: string;
  twitter: string;
  linkedin: string;
  skills: string[];
}

// Define the context type
interface ProfileContextType {
  profile: Profile | null;
  updateProfile: (profile: Profile) => void;
}

// Create the context with default values
const ProfileContext = createContext<ProfileContextType>({
  profile: null,
  updateProfile: () => {},
});

// Create a provider component
export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  const updateProfile = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
    // In a real app, you might save to localStorage or an API here
    console.log('Profile updated:', updatedProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

// Create a hook for using the context
export const useProfile = () => useContext(ProfileContext);
