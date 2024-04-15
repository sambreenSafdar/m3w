import ContainerWrapper from '@/components/container-wrapper';
import PricingCard from '@/components/pricing-card';
import { pricing } from '@/data/data';
import React from 'react';

const PricingSection = ({ id }) => {
  return (
    <section id={id}>
      <ContainerWrapper className="bg-white pt-28 pb-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-2 2xl:col-span-3"></div>
          <div className="col-span-12 sm:col-span-8 2xl:col-span-6 text-center mb-12">
            <h2 className="text-4xl font-semibold">Pricing</h2>
            <p className="mt-6 text-lg text-gray-500">
              Our pricing model is as simple as the game is easy to build. As a
              business, you can buy it by the month, quarter or year.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-2 2xl:col-span-3"></div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 xl:col-span-1"></div>
          {pricing?.map((price) => (
            <div
              className="col-span-12 sm:col-span-6 xl:col-span-5"
              key={price.title}
            >
              <PricingCard type={price.type} details={price} />
            </div>
          ))}
          <div className="col-span-12 xl:col-span-1"></div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default PricingSection;
