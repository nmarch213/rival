import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    if (localStorage.getItem('color-theme') === null) {
      localStorage.setItem('color-theme', 'dark');
      setMode(localStorage.getItem('color-theme') || 'light');
    }
  }, []);

  const handleToggle = () => {
    if (mode === 'dark') {
      setMode('light');
      localStorage.setItem('color-theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      setMode('dark');
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      id='theme-toggle'
      type='button'
      onClick={() => {
        handleToggle();
      }}
      className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
      {mode === 'dark' && (
        <div className='text-black dark:text-Foreground'>D</div>
      )}
      {mode === 'light' && (
        <div className='text-black dark:text-Foreground'>L</div>
      )}
    </button>
  );
}
