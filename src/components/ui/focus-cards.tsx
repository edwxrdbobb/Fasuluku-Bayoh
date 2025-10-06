"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const FocusCards = ({ cards }: { cards: Card[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export const Card = ({
  card,
  index,
  hovered,
  setHovered,
}: {
  card: Card;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-card overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out border border-border",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end py-8 px-6 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-80"
      )}>
        <div className="text-xl md:text-2xl font-medium text-white">
          {card.title}
        </div>
      </div>
    </div>
  );
};

export type Card = {
  title: string;
  src: string;
};
