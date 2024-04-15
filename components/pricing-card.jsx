'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './ui/button';
import { checkout } from '@/lib/stripe';

const PricingCard = ({ className, details }) => {
  const { title, subtitle, price, packages, type, extras, anualPrice } =
    details;
  const types =
    type === 'starter'
      ? 'bg-[#18bc9d]'
      : type === 'business'
      ? 'bg-[#3598db]'
      : 'bg-[#8e44ac]';

  const handleProductCheckout = (price) => {
    let item;
    if (price === 299) {
      item = {
        price: 'price_1OqGctHaeicZDaivVzzfIt1E',
        quantity: 1,
      };
    }
    if (price === 500) {
      item = {
        price: 'price_1OqGdVHaeicZDaivGtXCh2Wd',
        quantity: 1,
      };
    }
    checkout({
      lineItems: [item],
    });
  };
  return (
    <div
      className={cn(
        `py-16 px-5 2xl:px-16 text-center rounded-md text-white ${className} ${types}`
      )}
    >
      <h2 className="font-semibold text-2xl">{title}</h2>
      <h2 className="font-semibold text-2xl mb-0">{subtitle}</h2>
      <div className="w-10 border-b h-1 mx-auto border-gray-500 mt-4 mb-6"></div>
      <h1 className="text-5xl mb-2">${price}</h1>
      <p className="text-md text-gray-200">
        {type === 'business' ? '2 Months' : 'Month'}
      </p>
      <h1 className="text-5xl mb-2 mt-3">${anualPrice}</h1>
      <p className="text-md text-gray-200">Annual</p>
      <ul className="p-0 list-none mt-8">
        {packages?.map((pac) => (
          <li
            className="text-md border-b border-gray-400 border-dashed py-2"
            key={pac}
          >
            {pac}
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold my-8 text-gray-200">Extras</p>
      <ul className="p-0 list-none text-start">
        {extras?.map((pac) => (
          <li
            className="text-md border-b border-gray-400 border-dashed py-2 flex gap-2 w-full justify-between"
            key={pac.name}
          >
            <span>{pac.name}</span>
            <span>{pac.value}</span>
          </li>
        ))}
      </ul>
      <Button
        className="outline rounded-full bg-transparent px-12 mt-12"
        onClick={() => handleProductCheckout(price)}
      >
        Purchase
      </Button>
    </div>
  );
};

export default PricingCard;
