import React from 'react';

export default function Footer({ mode }) {
  return (
    <footer className={`text-center py-4 mt-8 text-sm font-medium border-t ${mode === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-600 border-gray-300'}`}>
      © {new Date().getFullYear()} Textutils by Sarvam Patel. All rights reserved.
    </footer>
  );
}
