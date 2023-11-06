import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar relative h-2 bg-gray-200 w-full rounded-md">
      <div className="progress bg-red-600 h-2 absolute rounded-md" style={{ width: `${progress}%` }}>
      </div>
    </div>
  );
};

export default ProgressBar;