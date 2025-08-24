const Features = () => {
  const cardDetails = [
    {
      title: 'Effortless affiliate management',
      body: 'Manage all of your advertisers, affiliates, offers, automated billings and invoicing in one place',
    },
    {
      title: 'Effortless affiliate management',
      body: 'Manage all of your advertisers, affiliates, offers, automated billings and invoicing in one place',
    },
    {
      title: 'Effortless affiliate management',
      body: 'Manage all of your advertisers, affiliates, offers, automated billings and invoicing in one place',
    },
  ];
  return (
    <section className='pt-16'>
      <h2 className='text-3xl font-medium text-left mb-8 max-w-lg'>
        Easily manage, track & find your affiliate partners.
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {cardDetails.map((card) => (
          <div
            key={card.title}
            className='bento-card max-w-lg bg-white rounded-2xl flex flex-col p-6 border-2 border-white shadow-md'
          >
            <header className='text-2xl font-medium'>{card.title}</header>
            <p className='mt-5 font-normal text-gray-500'>{card.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
