const Features = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Easily manage, track & find your affiliate partners.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-blue-100 p-6 rounded-lg mx-auto w-32 h-32 flex items-center justify-center">
            <span>Manage</span>
          </div>
          <p className="mt-4">Effortless affiliate management, automated billing & invoicing in one place.</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 p-6 rounded-lg mx-auto w-32 h-32 flex items-center justify-center">
            <span>Track</span>
          </div>
          <p className="mt-4">Track and analyze impressions, clicks and conversions in real time.</p>
        </div>
        <div className="text-center">
          <div className="bg-red-100 p-6 rounded-lg mx-auto w-32 h-32 flex items-center justify-center">
            <span>Analyze</span>
          </div>
          <p className="mt-4">Get deep insights of your network performance.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
