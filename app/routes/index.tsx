import ThemeToggle from '~/components/ThemeToggle';

export default function Index() {
  return (
    <div className='relative h-screen w-screen'>
      <ThemeToggle />
      <h1 className='text-black dark:text-Foreground'>Rival</h1>
    </div>
  );
}
