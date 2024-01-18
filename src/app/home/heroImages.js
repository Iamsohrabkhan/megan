"use client";
import Image from "next/image";
import { useEffect } from "react";
export default function HeroImages() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <section className=".section flex justify-center items-center flex-col relative container">
      <div
        className="scroller  max-w-lg lg:max-w-5xl"
        data-direction="left"
        data-speed="medium"
      >
        <div className="scroller__inner">
          <Card alt="Mike taylor" src="/megan.jpeg" />
          <Card alt="Mike taylor" src="https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Card alt="Mike taylor" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Card alt="Mike taylor" src="https://images.unsplash.com/photo-1590649681928-4b179f773bd5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <Card alt="Mike taylor" src="https://images.unsplash.com/photo-1531537571171-a707bf2683da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
    </section>
  );
}

const Card = ({ src, alt }) => {
  return (
    <div className="relative w-48 lg:w-64 aspect-square rounded-xl">
      <Image src={src} alt={alt} className="rounded object-cover" fill />
    </div>
  );
};
