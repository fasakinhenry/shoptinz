import Header from '@components/landing/header';
import Hero from '@components/landing/hero';
import Sponsors from '@components/landing/sponsors';
import Features from '@components/landing/features';
import Stats from '@components/landing/stats';
import Marketplace from '@components/landing/marketplace';
import Revenue from '@components/landing/revenue';
import Pricing from '@components/landing/pricing';
import CallToAction from '@components/landing/callToAction';
import Footer from '@components/landing/footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gray-50 text-gray-800">
      <Header />
      <div className="container mx-auto px-4">
        <Hero />
        <Sponsors />
        <Features />
        <Stats />
        <Marketplace />
        <Revenue />
        <Pricing />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
