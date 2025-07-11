import React from 'react';
import CouriereLogo from '../Shared/CouriereLogo';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import ClientLogo from './clientLogo/ClientLogo';
import FeaturesHighLights from './FeaturesHighlights/FeaturesHighLights';
import PrirotySection from './priortySection/PrirotySection';
import HowItWorks from '../howItwork/HowItWorks ';
import TestimonialSlider from './TestimonialSlider/TestimonialSlider';
import FrequentlyQuestion from './FrequentlyQuestion/FrequentlyQuestion';

const Home = () => {
    return (
        <div  className="w-11/12 mx-auto">
          <section className='my-4'>
             <Banner></Banner>
          </section>

          <section>
            <HowItWorks></HowItWorks>
          </section>
          <section>
            <Services></Services>
          </section>

          <section>
            <ClientLogo></ClientLogo>
          </section>

          <section>
            <FeaturesHighLights></FeaturesHighLights>
          </section>

          <section>
            <PrirotySection></PrirotySection>
          </section>
          <section>
            <TestimonialSlider></TestimonialSlider>
          </section>

          <section>
            <FrequentlyQuestion></FrequentlyQuestion>
          </section>
           
        </div>
    );
};

export default Home;