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
    <div>
      <button
        id='theme-toggle'
        type='button'
        onClick={() => {
          handleToggle();
        }}
        className='absolute top-5 right-5 hover:animate-grow'>
        {mode === 'dark' && (
          <div className='text-black dark:text-Foreground'>
            <img src='/assets/sun.svg' alt='moon' className='h-16 w-16' />
          </div>
        )}
        {mode === 'light' && (
          <div className='text-black dark:text-Foreground'>
            <img src='/assets/moon.svg' alt='moon' className='h-16 w-16' />
          </div>
        )}
      </button>
    </div>
  );
}
