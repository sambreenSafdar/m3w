import ContainerWrapper from '@/components/container-wrapper';
import PartnerCard from '@/components/partner-card';
import { partners } from '@/data/data';
import React from 'react';

const PartnerSection = ({ id }) => {
  return (
    <section id={id}>
      <ContainerWrapper className="bg-[#343477] py-16">
        <div className="flex items-center">
          <div className="h-full">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-1 2xl:col-span-3"></div>
              <div className="col-span-12 sm:col-span-10 2xl:col-span-6 text-center">
                <div>
                  <h2 className="text-white text-4xl font-semibold">
                    Partners
                  </h2>
                  <p className="text-lg text-gray-200 pt-3">
                    As an agency or media advior, we are intrested in speaking
                    with you regarding the opportunities to offer our gaming
                    widgets to your customers. We have specific verticals that
                    we are attacking at this time.
                  </p>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-1 2xl:col-span-3"></div>
            </div>
            <div className="grid grid-cols-12 gap-6 px-4 pt-16">
              {partners?.map((partner) => (
                <div
                  className="col-span-12 sm:col-span-6 md:col-span-3"
                  key={partner.name}
                >
                  <PartnerCard
                    icon={partner.image}
                    title={partner.name}
                    href={partner.url}
                    className=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default PartnerSection;
