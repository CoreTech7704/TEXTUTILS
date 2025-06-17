import React from 'react';

export default function About(props) {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 transition-all duration-300 ${props.mode === 'dark' ? 'text-white bg-gray-900' : 'text-gray-800 bg-white'}`}>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg leading-relaxed">
        Welcome to <strong>TextUtils</strong> – your simple, powerful tool for text manipulation. Whether you're looking to convert case, remove extra spaces, or count words and characters, our app makes it effortless.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        Built with ❤️ using React and Tailwind CSS, this app is designed for developers, writers, and students who want to save time and be more productive with text processing tasks.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        Want to contribute or have feature ideas? We'd love to hear from you!
      </p>
    </div>
  );
}
