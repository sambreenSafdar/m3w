import React, { Children } from 'react';

const StepCard = ({ title, children, step }) => {
  return (
    <div className="px-8 py-12">
      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
        <h2 className="text-2xl font-bold text-center text-white">{step}</h2>
      </div>
      <h2 className="text-xl font-semibold mt-6 mb-4">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default StepCard;
