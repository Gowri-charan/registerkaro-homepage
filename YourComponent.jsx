import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

function MyComponent() {
  return (
    <button className="flex items-center">
      Continue
      <FiArrowRight size={16} className="ml-1" />
    </button>
  );
}

export default MyComponent;
