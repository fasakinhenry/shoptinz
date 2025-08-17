import Button from '@components/ui/button';

const Pricing = () => {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Suitable pricing for you</h2>
      <p className="mb-6">Choose the plan that’s right for you. Or start our 7-day free trial</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-6 rounded-lg">
          <h3>Startup</h3>
          <p className="text-2xl font-bold">$19<span className="text-sm">/month</span></p>
          <ul className="text-left mt-4 space-y-2">
            <li>For individuals</li>
            <li>Unlimited affiliates</li>
            <li>Free strategy meeting</li>
          </ul>
          <Button variant="primary" size="md" className="mt-4">Start 14 day trial</Button>
        </div>
        <div className="border p-6 rounded-lg">
          <h3>Business</h3>
          <p className="text-2xl font-bold">$75<span className="text-sm">/month</span></p>
          <ul className="text-left mt-4 space-y-2">
            <li>More than 50 affiliates</li>
            <li>Unlimited affiliates</li>
            <li>Free strategy meeting</li>
          </ul>
          <Button variant="primary" size="md" className="mt-4">Start 14 day trial</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
