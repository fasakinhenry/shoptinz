import { Link } from 'react-router';
import { useState } from 'react';
import Button from '@/components/ui/button';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigations = [
    { to: '/marketplace', title: 'Marketplace' },
    { to: '/buyers', title: 'Buyers' },
    { to: '/affiliates', title: 'Affiliates' },
  ];

  return (
    <header className='w-screen flex justify-center'>
      <div className='container flex justify-between items-center'>
        <nav>
          {navigations.map((nav) => (
            <Link key={nav.to} to={nav.to}>
              {nav.title}
            </Link>
          ))}
        </nav>
        <div className='font-bold text-2xl'>Trackit</div>
        <div className='space-x-4'>
          <Button variant='primary'>Sign In</Button>
          <Button variant='secondary'>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
