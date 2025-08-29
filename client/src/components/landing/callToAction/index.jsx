import Button from '@components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 text-center bg-blue-500 text-white rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Create your affiliate program!</h2>
      <p className="mb-6">Ready to start growing your MRR? Create your affiliate program, completely free!</p>
      <Button variant="tertiary" size="md">Sign In & Get Started</Button>
    </section>
  );
};

export default CallToAction;
