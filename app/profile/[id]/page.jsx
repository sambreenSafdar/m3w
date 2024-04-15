'use client';
import ContainerWrapper from '@/components/container-wrapper';
import { DataTable } from '@/components/data-table';
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOff } from 'lucide-react';
import React, { useState } from 'react';

const Profile = ({ id }) => {
  const [view, setView] = useState(false);
  const [active, setActive] = useState('tab1');
  return (
    <section id={id}>
      <ContainerWrapper className="mt-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="flex gap-4 mb-3">
              <h2 className="text-2xl">Rose Cowell</h2>
              <div className="px-4 py-1 bg-green-400 rounded-lg">
                <span className="text-green-900 text-sm">Gold Loyalty</span>
              </div>
            </div>
            <div className="flex gap-2 mb-2">
              <span className="text-gray-400 text-sm">ID: 125877</span>
              <span className="text-gray-400">/</span>
              <span className="text-sm">Sample Restaurant</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="border rounded-lg px-5">
              <div className="grid grid-cols-12 gap-4 border-b">
                <div className="col-span-6 md:col-span-3 pb-4 pt-6">
                  <span className="text-sm">883878555</span>
                </div>
                <div className="col-span-3 pb-4 pt-6 relative">
                  <span className="text-sm text-green-600 block absolute top-1 left-4">
                    Today
                  </span>
                  <span className="text-sm">10/12/2023</span>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3 pb-4 pt-6 relative">
                  <span className="text-xs text-gray-400 block absolute top-1 left-4">
                    Mobile #
                  </span>
                  <span className="text-sm">+1(979)331-1875</span>
                </div>
                <div className="col-span-12 md:col-span-3 pb-4 pt-6 relative">
                  <span className="text-xs text-gray-400 block absolute top-1 left-4">
                    Email
                  </span>
                  <span className="text-sm">example@example.com</span>
                </div>
                <div className="col-span-12 md:col-span-3 pb-4 pt-6 relative">
                  <span className="text-xs text-gray-400 block absolute top-1 left-4 uppercase">
                    Loyalty
                  </span>
                  <span className="text-md">18219288222</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-5">
          <div className="col-span-12">
            <div className="border rounded-lg px-5 py-4">
              <div className="flex justify-between items-center">
                <h2>Guest Details</h2>
                <span
                  className={`text-xs uppercase flex items-center gap-1 cursor-pointer ${
                    !view ? 'text-green-500' : 'text-gray-500'
                  }`}
                  onClick={() => setView(!view)}
                >
                  {!view ? (
                    <>
                      <EyeIcon /> View
                    </>
                  ) : (
                    <>
                      <EyeOff /> Hide
                    </>
                  )}
                </span>
              </div>
              <div className={`${view ? 'block' : 'hidden'} mt-5`}>
                <div className="border-b">
                  <Button
                    className="rounded-none rounded-tl-lg rounded-tr-lg"
                    variant={active === 'tab1' ? 'secondary' : 'gray'}
                    onClick={() => setActive('tab1')}
                  >
                    Profile
                  </Button>
                  <Button
                    className="rounded-none rounded-tl-lg rounded-tr-lg"
                    variant={active === 'tab2' ? 'secondary' : 'gray'}
                    onClick={() => setActive('tab2')}
                  >
                    Prizes
                  </Button>
                </div>
                {active === 'tab1' && (
                  <div className="tab1">
                    <div className="grid grid-cols-12 gap-4 mt-10 border-b">
                      <div className="col-span-12">
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-6 md:col-span-3 pb-4 pt-6 relative">
                            <span className="text-xs uppercase text-gray-400 block absolute top-1">
                              Address
                            </span>
                            <span className="text-sm">192 St. Amber Blvd.</span>
                          </div>
                          <div className="col-span-6 md:col-span-3 pb-4 pt-6 relative">
                            <span className="text-xs uppercase text-gray-400 block absolute top-1">
                              City
                            </span>
                            <span className="text-sm">Edwards</span>
                          </div>
                          <div className="col-span-6 md:col-span-3 pb-4 pt-6 relative">
                            <span className="text-xs text-gray-400 block absolute top-1 uppercase">
                              State
                            </span>
                            <span className="text-md">Colorado</span>
                          </div>
                          <div className="col-span-6 md:col-span-3 pb-4 pt-6 relative">
                            <span className="text-xs text-gray-400 block absolute top-1 uppercase">
                              zip
                            </span>
                            <span className="text-md">3299908</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 border-b mt-3">
                      <div className="col-span-12">
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-6 md:col-span-3 pb-4 pt-6 relative">
                            <span className="text-xs uppercase text-gray-400 block absolute top-1">
                              Mobile #
                            </span>
                            <span className="text-sm">+1(979)331-1875</span>
                          </div>
                          <div className="col-span-6 md:col-span-3 pb-4 pt-6 relative">
                            <span className="text-xs uppercase text-gray-400 block absolute top-1">
                              Email
                            </span>
                            <span className="text-sm">example@example.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-3">
                      <div className="col-span-12">
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-6 md:col-span-3 pb-4 pt-6 relative">
                            <span className="text-xs uppercase text-gray-400 block absolute top-1">
                              Birthday #
                            </span>
                            <span className="text-sm">August 02</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {active === 'tab2' && (
                  <div className="tab2 mt-10">
                    <div className="grid grid-cols-12 gap-4 py-4 px-5 bg-gray-100">
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">00084744</span>
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">01/20/2023</span>
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">Free Pizza</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 py-4 px-5">
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">00084744</span>
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">01/20/2023</span>
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">10% Off</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 py-4 px-5 bg-gray-100">
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">00084744</span>
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">01/20/2023</span>
                      </div>
                      <div className="col-span-4 md:col-span-3">
                        <span className="text-sm">Free Drink</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default Profile;
