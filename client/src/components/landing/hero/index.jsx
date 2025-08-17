import Button from '@components/button';
import './hero.css';

const Hero = () => {
  return (
    <section className='relative py-16 text-center'>
      <div className='hero-gradient'></div>
      <h1 className='text-4xl font-bold mb-4'>
        Easily manage, track & find your affiliate partners.
      </h1>
      <p className='text-lg mb-6'>
        ProfitPulse helps businesses, manage, track, and find affiliates.
      </p>
      <div className='space-x-4'>
        <Button variant='primary' size='md'>
          Get Started
        </Button>
        <Button variant='secondary' size='md'>
          Book Demo
        </Button>
      </div>
    </section>
  );
};

export default Hero;
