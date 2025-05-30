'use client';
import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

type Slide = {
  id: number;
  title: string;
  image: string;
};

type EmblaCarouselProps = {
  slides: Slide[];
  options?: any;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ slides }) => {
  const [selected, setSelected] = React.useState<number[]>([]);

  const isItemSelected = (id: number) => selected.includes(id);

  const handleClick =
    (id: number) =>
    () => {
      const itemSelected = isItemSelected(id);
      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id),
      );
    };

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {slides.map(({ id, title, image }) => (
          <Card
            key={id}
            itemId={id}
            id={id}
            title={title}
            image={image}
            onClick={handleClick(id)}
            selected={isItemSelected(id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

const LeftArrow: React.FC = () => {
  const visibility = React.useContext(VisibilityContext);
  // @ts-ignore
  const isFirstItemVisible = visibility.useIsVisible?.('first', true);
  return (
    <Arrow
      disabled={isFirstItemVisible}
      // @ts-ignore
      onClick={() => visibility.scrollPrev?.()}
      className="left"
    >
      {/* Puedes usar un ícono aquí */}
      <span className="text-2xl">{'‹'}</span>
    </Arrow>
  );
};

const RightArrow: React.FC = () => {
  const visibility = React.useContext(VisibilityContext);
  // @ts-ignore
  const isLastItemVisible = visibility.useIsVisible?.('last', false);
  return (
    <Arrow
      disabled={isLastItemVisible}
      // @ts-ignore
      onClick={() => visibility.scrollNext?.()}
      className="right"
    >
      {/* Puedes usar un ícono aquí */}
      <span className="text-2xl">{'›'}</span>
    </Arrow>
  );
};

type CardProps = {
  id: number;
  itemId: number;
  title: string;
  image: string;
  onClick: () => void;
  selected: boolean;
};

const Card: React.FC<CardProps> = ({ id, title, image, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[330px] h-[380px] mx-2 cursor-pointer rounded-lg bg-white border-2 ${
        selected ? 'border-blue-500' : 'border-transparent'
      }`}
      tabIndex={0}
    >
      <img src={image} alt={title} className="w-full h-[240px] object-cover rounded-t-lg" />
      <div className="p-2 text-center">{title}</div>
    </div>
  );
};

const Arrow: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
  <button
    {...props}
    className="px-2 py-1 text-2xl bg-white rounded-full shadow disabled:opacity-50"
  >
    {children}
  </button>
);

export default EmblaCarousel;