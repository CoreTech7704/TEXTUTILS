import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    props.alert && (
      <div className={`flex items-center p-4 mb-4 text-sm rounded-lg transition-all duration-300
        ${props.alert.type === 'success' ? 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800' : ''}
        ${props.alert.type === 'error' ? 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800' : ''}
        ${props.alert.type === 'warning' ? 'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800' : ''}
      `} role="alert">
        <span className="font-medium">{capitalize(props.alert.type)}:</span>&nbsp;
        {props.alert.msg}
      </div>
    )
  );
}
