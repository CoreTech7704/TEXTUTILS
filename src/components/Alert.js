import React, { useEffect, useState } from 'react';

export default function Alert({ alert, clearAlert }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (alert) {
      setVisible(true);

      // Auto-hide after 2.5 seconds
      const timeout = setTimeout(() => {
        setVisible(false);

        // Wait for fade-out animation before clearing alert from parent
        setTimeout(() => {
          clearAlert();
        }, 300); // match transition duration
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [alert, clearAlert]);

  const capitalize = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    alert && (
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-3 rounded-lg shadow-md max-w-sm w-full text-sm transition-opacity duration-300
          ${visible ? 'opacity-100' : 'opacity-0'}
          ${alert.type === 'success' ? 'text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800' : ''}
          ${alert.type === 'error' ? 'text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800' : ''}
          ${alert.type === 'warning' ? 'text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800' : ''}
        `}
        role="alert"
      >
        <span className="font-medium">{capitalize(alert.type)}:</span> {alert.msg}
      </div>
    )
  );
}
