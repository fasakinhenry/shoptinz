import Button from '@components/ui/button';
import '@components/landing/hero/hero.css';

const Hero = () => {
  return (
    <section className='relative pt-16 text-center md:rounded-xl overflow-clip w-full max-w-7xl mx-auto'>
      <div
        className='hero-gradient absolute inset-0'
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.9) 70%, rgba(147, 197, 253, 0.2) 100%, rgba(147, 197, 253, 0.8) 100%), linear-gradient(to bottom, rgba(147, 197, 253, 0.8), transparent 70%)',
          borderRadius: '16px',
          zIndex: 0,
        }}
      />
      <div className='relative z-10 px-4'>
        <h1 className='text-xl font-medium mb-4 text-black sm:text-3xl'>
          Easily manage, track & find your affiliate partners.
        </h1>
        <p className='text-md mb-6 sm:text-sm'>
          ProfitPulse helps businesses, manage, track, and find affiliates.
        </p>
        <div className='space-x-4 mb-8 sm:space-x-6'>
          <Button variant='primary' size='md'>
            Get Started
          </Button>
          <Button variant='secondary' size='md'>
            Book Demo
          </Button>
        </div>
        <div className='w-full flex justify-center'>
          <img
            src='/trackitui.png'
            alt='Trackit Dashboard'
            className='object-cover h-60'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
