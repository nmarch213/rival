import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import styles from './tailwind.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Rival: Nicholas March Portfolio',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    if (localStorage.getItem('color-theme') === null) {
      localStorage.setItem('color-theme', 'dark');
      setMode(localStorage.getItem('color-theme') || 'light');
    }
  }, []);

  return (
    <html lang='en' className={mode}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className='bg-white dark:bg-Background h-screen w-screen'>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
