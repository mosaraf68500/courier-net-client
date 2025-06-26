import React from 'react';
import CouriereLogo from '../Shared/CouriereLogo';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import ClientLogo from './clientLogo/ClientLogo';
import FeaturesHighLights from './FeaturesHighlights/FeaturesHighLights';

const Home = () => {
    return (
        <div  className="w-11/12 mx-auto">
          <section className='my-4'>
             <Banner></Banner>
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
           
        </div>
    );
};

export default Home;