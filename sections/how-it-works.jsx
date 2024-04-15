import ContainerWrapper from '@/components/container-wrapper';
import StepCard from '@/components/step-card';
import { steps } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const HowItWorksSection = ({ id }) => {
  return (
    <section id={id}>
      <ContainerWrapper className="py-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-12 text-center">
            <h2 className="text-4xl font-semibold mb-10">How It Works</h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 2xl:col-span-1"></div>
          <div className="col-span-12 2xl:col-span-10">
            <div className="grid grid-cols-12 gap-4">
              {steps.map((step, i) => (
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-4"
                  key={step.title}
                >
                  <StepCard title={step.title} step={step.step}>
                    {step.description}
                  </StepCard>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 2xl:col-span-1"></div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default HowItWorksSection;
