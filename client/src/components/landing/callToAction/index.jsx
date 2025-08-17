import Button from '@components/button';

const CallToAction = () => {
  return (
    <section className="py-16 text-center bg-blue-100 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Create your affiliate program!</h2>
      <p className="mb-6">Ready to start growing your MRR? Create your affiliate program, completely free!</p>
      <Button variant="primary" size="md">Sign In & Get Started</Button>
    </section>
  );
};

export default CallToAction;
