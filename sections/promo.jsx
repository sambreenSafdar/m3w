import ContainerWrapper from '@/components/container-wrapper';
import React from 'react';

const PromoSection = ({ id }) => {
  return (
    <section id={id}>
      <ContainerWrapper className="bg-[#edf2f4] py-28">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2 2xl:col-span-3"></div>
          <div className="col-span-12 md:col-span-8 2xl:col-span-6 text-center">
            <h2 className="text-2xl font-semibold">
              We love a challenge as much as consumers{' '}
              <br className="hidden md:block" /> love playing our game.
            </h2>
            <p className="mt-10 text-lg text-gray-500">
              As a partner, you will have access to the system, manage multiple
              accounts, and have access to all of the"user case data" that we
              acquire through the games to help you improve your marketing
              efforts.
            </p>
          </div>
          <div className="col-span-12 md:col-span-2 2xl:col-span-3"></div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default PromoSection;
