import { Link } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigations = [
    { to: '/marketplace', title: 'Marketplace' },
    { to: '/buyers', title: 'Buyers' },
    { to: '/affiliates', title: 'Affiliates' },
  ];

  return (
    <header className='w-screen flex justify-center py-4'>
      <div className='container flex justify-between items-center px-4'>
        {/* Desktop Nav */}
        <nav className='hidden md:flex space-x-6 text-gray-600'>
          {navigations.map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              className='block hover:text-blue-600 cursor-pointer'
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className='font-bold text-2xl'>Shoptinz</div>

        {/* Desktop Buttons */}
        <div className='hidden md:flex space-x-4'>
          <Button
            variant='secondary'
            size='sm'
            href='/signup'
            className='text-blue-600 hover:text-blue-600'
          >
            Sign Up
          </Button>
          <Button
            variant='primary'
            size='sm'
            href='/signin'
            className='text-white hover:text-white'
          >
            Sign In
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden p-2 rounded hover:bg-gray-100 cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50'>
          <nav className='flex flex-col space-y-4 p-4'>
            {navigations.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                className='block hover:text-blue-600 cursor-pointer'
                onClick={() => setMenuOpen(false)}
              >
                {nav.title}
              </Link>
            ))}

            <div className='flex flex-col space-y-2 pt-4'>
              <Button
                variant='secondary'
                className='w-full text-blue-600 hover:text-blue-600'
                href='/signup'
              >
                Sign Up
              </Button>
              <Button
                variant='primary'
                className='w-full text-white hover:text-white'
                href='/signin'
              >
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
