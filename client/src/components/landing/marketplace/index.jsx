import Button from '@components/ui/button';

const Marketplace = () => {
  return (
    <section className='py-16 text-center'>
      <h2 className='text-3xl font-bold mb-8'>
        Affiliate programs marketplace
      </h2>
      <p className='mb-6'>
        Grow your MRR, don’t worry about finding affiliates, let us place.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='border p-4 rounded-lg'>
          <h3>Zubitel.it</h3>
          <p>Established in 2018, Zubitel.it is a well...</p>
          <Button variant='primary' size='sm'>
            View Program
          </Button>
        </div>
        <div className='border p-4 rounded-lg'>
          <h3>Zone-12</h3>
          <p>Zone-12 is a prominent online retailer that...</p>
          <Button variant='primary' size='sm'>
            View Program
          </Button>
        </div>
        <div className='border p-4 rounded-lg'>
          <h3>ZooVpn</h3>
          <p>With ZooVpn, you have access to a variety...</p>
          <Button variant='primary' size='sm'>
            View Program
          </Button>
        </div>
      </div>
      <Button variant='primary' size='md' className='mt-6'>
        Get Started
      </Button>
    </section>
  );
};

export default Marketplace;
