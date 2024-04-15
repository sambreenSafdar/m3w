import ContainerWrapper from '@/components/container-wrapper';
import GameCard from '@/components/game-card';
import { games } from '@/data/data';
import React from 'react';

const GamesSection = ({ id }) => {
  return (
    <section id={id}>
      <ContainerWrapper className="pt-16">
        <div className="grid grid-cols-12 gap-4">
          {games.map((game) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={game.url}
            >
              <GameCard title={game.title} url={game.url} image={game.image} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-2"></div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-lg text-center mt-10">
              If you don't find the game you want to use, send us an email{' '}
              <a className="text-primary" href="mailto:designs@match3win.com">
                designs@match3win.com
              </a>
            </p>
          </div>
          <div className="col-span-12 md:col-span-2"></div>
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default GamesSection;
