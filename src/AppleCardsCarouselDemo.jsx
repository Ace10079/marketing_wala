"use client";

import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import { ContainerTextFlip } from "../components/ui/container-text-flip";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2
        className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800  font-sans text-center">
        How We Help Brands  <ContainerTextFlip
      words={["Win", "be Modern", "be Awesome"]}
    />
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const data = [
  {
    category: "Design",
    title: "Design that speaks louder than words",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
  },
  {
    category: "Content Creation",
    title: "Crafting content that clicks and sticks.",
    src: "https://t3.ftcdn.net/jpg/07/52/34/76/360_F_752347607_Wj6oZUQQ1fyIc1JORA2fQSOSfGPDUkYA.jpg",
    
  },
  {
    category: "Social Media Marketing",
    title: "Turning likes into loyalty.",
    src: "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/4cd4dd24-844c-486d-9404-b017bf8a435e/social_media_mastery2x.png",
    
  },

  {
    category: "Consultation",
    title: "Strategy that makes success inevitable.",
    src: "https://media.istockphoto.com/id/1453344127/photo/doctor-talks-with-patient-and-takes-notes.jpg?s=612x612&w=0&k=20&c=euGt94IGvwsXCBme_rCgWeF92r8HMOhJwo763HvTY5Y=",
    
  },
];
