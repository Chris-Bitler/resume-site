'use client';

import React from 'react';

type JobExperienceProps = {
  jobName: string;
  companyName: string;
  startDate?: Date;
  endDate?: Date;
  experience: string[];
};

const JobExperience: React.FC<JobExperienceProps> = ({ 
  jobName,
  companyName,
  startDate, 
  endDate, 
  experience 
}) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-1">
        {jobName} <span className="text-gray-600 font-normal">({companyName})</span>
      </h3>
      {startDate && endDate && (
        <p className="text-sm text-gray-600 italic mb-4">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
      )}
      <ul className="list-disc list-inside space-y-2">
        {experience.map((item, index) => (
          <li key={index} className="text-gray-700">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobExperience; 