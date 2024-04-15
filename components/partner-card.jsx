import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PartnerCard = ({ icon, title, href, className }) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          'bg-[#f0f0f0] flex flex-col items-center rounded-md p-5',
          className
        )}
      >
        <div className="relative">
          <Image src={icon} alt={title} height={145} width={135} />
        </div>
        <h2 className="font-semibold pt-3">{title}</h2>
      </div>
    </Link>
  );
};

export default PartnerCard;
