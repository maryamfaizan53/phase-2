/**
 * Modern Input Component
 */
import React from 'react';

const Input = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-200 mb-1 ml-1">
          {label} {required && <span className="text-pink-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 glass-input rounded-xl focus:outline-none transition-all duration-300 placeholder-gray-400 ${
          error 
            ? 'border-red-500 focus:border-red-500 box-shadow-none' 
            : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-400 animate-fade-in ml-1">{error}</p>}
    </div>
  );
};

export default Input;