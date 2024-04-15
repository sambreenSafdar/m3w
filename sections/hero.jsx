'use client';
import ContainerWrapper from '@/components/container-wrapper';
import { Modal } from '@/components/modal';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

const HeroSection = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={handleChange} />
      <section id={id}>
        <ContainerWrapper className="bg-secondary pt-16">
          <div className="flex items-center w-full">
            <div className="grid grid-cols-12 gap-8 w-full pt-10 lg:pt-10">
              <div className="col-span-12 md:col-span-6">
                <div className="flex flex-col text-white justify-center min-h-[40vh] md:min-h-[70vh]">
                  <h1 className="text-5xl md:text-5xl lg:text-7xl font-rubik">
                    Welcome to <br /> match3win!
                  </h1>
                  <p className="pt-6 text-xl font-light">
                    Your social media gaming application that can be placed on
                    your website, social media sites, emails or even an on-line
                    advertisement.
                  </p>
                  <div className="flex gap-5 pt-12">
                    <Button className="h-[54px] px-8" size="xl">
                      Get Started
                    </Button>
                    <Button
                      size="xl"
                      variant="link"
                      className="underline text-white px-2"
                    >
                      Try Game Demo
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-6 h-full">
                <div className="w-full bottom-0 h-full min-h-[400px]">
                  <div className="relative max-w-[580px] mx-auto h-full md:bottom-[-140px] home-image">
                    <div
                      className="z-10 absolute w-[190px] h-[190px] bottom-[14.5%] right-9 sm:w-[190px] sm:h-[190px] sm:bottom-[14.5%] sm:right-36 md:right-[30px] md:bottom-[22.5%] md:w-[249px] md:h-[248px] xl:right-[40px] xl:bottom-[14.5%] xl:w-[320px] xl:h-[320px] cursor-pointer"
                      onClick={handleChange}
                    ></div>
                    <Image
                      src="/phone.png"
                      alt="profile"
                      objectFit="contain"
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </section>
    </>
  );
};

export default HeroSection;
