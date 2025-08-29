import Button from '@components/ui/button';

const Marketplace = () => {
  return (
    <section className='pt-16 text-center'>
      <h2 className='text-3xl font-bold mb-8'>
        Affiliate programs marketplace
      </h2>
      <p className='mb-6'>
        Grow your MRR, don’t worry about finding affiliates, let us place.
      </p>
      <div className='flex flex-col justify-center items-center w-full md:flex-row gap-4 md:gap-8'>
        {/* Marketplace card */}
        <div className='market-card bg-white rounded-xl shadow max-w-80 p-5 flex flex-col text-left'>
          <header className='flex items-center h-full mb-3'>
            <div className='w-10 h-10 bg-blue-900 mr-8 mb-3 rounded-xl'></div>
            <h3 className='text-center font-bold'>Zubtitle</h3>
          </header>
          <div className='tag-container flex gap-3 mb-4'>
            <div className='tag p-1 px-3 border-2 border-gray-200 text-sm rounded-xl'>
              Marketing
            </div>
            <div className='tag p-1 px-3 border-2 border-gray-200 text-sm rounded-xl'>
              Software
            </div>
          </div>
          <p>
            Established in 2018, zubtitle is a wweb-based application designed
            to automatically generate
          </p>
          <div className='cta-btn w-full border-2 border-gray-400 p-2 flex justify-center items-center rounded-md mt-6 font-bold text-gray-600 cursor-pointer'>
            View Program
          </div>
        </div>
        {/* Marketplace card */}
        <div className='market-card bg-white rounded-xl shadow max-w-80 p-5 flex flex-col text-left'>
          <header className='flex items-center h-full mb-3'>
            <div className='w-10 h-10 bg-blue-900 mr-8 mb-3 rounded-xl'></div>
            <h3 className='text-center font-bold'>Zubtitle</h3>
          </header>
          <div className='tag-container flex gap-3 mb-4'>
            <div className='tag p-1 px-3 border-2 border-gray-200 text-sm rounded-xl'>
              Marketing
            </div>
            <div className='tag p-1 px-3 border-2 border-gray-200 text-sm rounded-xl'>
              Software
            </div>
          </div>
          <p>
            Established in 2018, zubtitle is a wweb-based application designed
            to automatically generate
          </p>
          <div className='cta-btn w-full border-2 border-gray-400 p-2 flex justify-center items-center rounded-md mt-6 font-bold text-gray-600 cursor-pointer'>
            View Program
          </div>
        </div>
        {/* Marketplace card */}
        <div className='market-card bg-white rounded-xl shadow max-w-80 p-5 flex flex-col text-left'>
          <header className='flex items-center h-full mb-3'>
            <div className='w-10 h-10 bg-blue-900 mr-8 mb-3 rounded-xl'></div>
            <h3 className='text-center font-bold'>Zubtitle</h3>
          </header>
          <div className='tag-container flex gap-3 mb-4'>
            <div className='tag p-1 px-3 border-2 border-gray-200 text-sm rounded-xl'>
              Marketing
            </div>
            <div className='tag p-1 px-3 border-2 border-gray-200 text-sm rounded-xl'>
              Software
            </div>
          </div>
          <p>
            Established in 2018, zubtitle is a wweb-based application designed
            to automatically generate
          </p>
          <div className='cta-btn w-full border-2 border-gray-400 p-2 flex justify-center items-center rounded-md mt-6 font-bold text-gray-600 cursor-pointer'>
            View Program
          </div>
        </div>
      </div>
      <div className='space-x-4 mt-5 sm:space-x-6'>
        <Button variant='primary' size='md' className='mt-6'>
          Get Started
        </Button>
        <Button variant='secondary' size='md' className='mt-6'>
          Learn more
        </Button>
      </div>
    </section>
  );
};

export default Marketplace;
