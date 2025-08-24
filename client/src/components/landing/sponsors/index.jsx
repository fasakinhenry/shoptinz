const Sponsors = () => {
  const sponsorList = ["Ebay", "Microsoft", "Airbnb", "Sider", "Daytrip", "Vodaphone", "Acciojobs", "Philips"]
  return (
    <section className='py-8 text-center'>
      <p className='text-gray-500'>200+ companies use ProfitPulse for growth</p>
      <div className='flex justify-center space-x-4 mt-4'>
        {sponsorList.map((sponsor) => (
          <span className="px-5 py-1 shadow-xl border-white border-2 rounded-md bg-gray-100 font-medium">{sponsor}</span>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
