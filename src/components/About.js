import React from 'react';

export default function About(props) {
  return (
    <div className={`max-w-4xl mx-auto px-4 sm:px-6 py-8 transition-all duration-300 rounded-lg
      ${props.mode === 'dark' ? 'text-white bg-gray-900' : 'text-gray-800 bg-white'}`}>
      
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">About Us</h1>

      <div className="space-y-5 text-lg leading-relaxed">
        <p>
          Welcome to <strong>TextUtils</strong> – your simple, powerful tool for text manipulation.
          Whether you're looking to convert case, remove extra spaces, or count words and characters,
          our app makes it effortless.
        </p>

        <p>
          Built with <span className="text-red-500">❤️</span> using <strong>React</strong> and <strong>Tailwind CSS</strong>,
          this app is designed for developers, writers, and students who want to save time and be more productive with text processing tasks.
        </p>

        <p>
          Want to contribute or have feature ideas? We'd love to hear from you!
        </p>
      </div>
    </div>
  );
}
