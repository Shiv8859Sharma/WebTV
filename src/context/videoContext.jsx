import React, { createContext, useState, useContext } from "react";

// Create the context
const VideoContext = createContext();

// Context provider component
export const VideoProvider = ({ children }) => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <VideoContext.Provider value={{ activeVideoId, setActiveVideoId }}>
      {children}
    </VideoContext.Provider>
  );
};

// Custom hook to use video context
export const useVideoContext = () => {
  return useContext(VideoContext);
};
