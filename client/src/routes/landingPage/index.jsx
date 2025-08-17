import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
const LandingPage = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-gray-50 text-gray-800'>
      <Header />
      <div className='container mx-auto px-4 flex flex-col'>
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
