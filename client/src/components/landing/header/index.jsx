import { Link } from 'react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons
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
        <nav className='hidden md:flex space-x-6'>
          {navigations.map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              className='block hover:text-blue-600'
            >
              {nav.title}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className='font-bold text-2xl'>Trackit</div>

        {/* Desktop Buttons */}
        <div className='hidden md:flex space-x-4'>
          <Button variant='secondary' size='sm'>
            Sign Up
          </Button>
          <Button variant='primary' size='sm'>
            Sign In
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className='md:hidden p-2 rounded hover:bg-gray-100'
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
                className='block hover:text-blue-600'
                onClick={() => setMenuOpen(false)}
              >
                {nav.title}
              </Link>
            ))}

            <div className='flex flex-col space-y-2 pt-4'>
              <Button variant='secondary' className='w-full'>
                Sign Up
              </Button>
              <Button variant='primary' className='w-full'>
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
