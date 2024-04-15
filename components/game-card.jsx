import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const GameCard = ({ image, title, url }) => {
  return (
    <Link href={url}>
      <div className="bg-secondary py-6 px-4 text-center rounded-xl hover:scale-[1.02] transition ease-in-out delay-150">
        <div className="relative">
          <Image
            className="rounded-xl"
            src={image}
            alt={title}
            height={300}
            width={1000}
          />
        </div>
        <h2 className="text-white text-lg mt-5">{title}</h2>
      </div>
    </Link>
  );
};

export default GameCard;
