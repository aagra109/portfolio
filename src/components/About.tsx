import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-5xl scroll-mt-24 px-6 pb-10 sm:px-10"
    >
      <div className="rounded-2xl border border-border/80 bg-card/95 p-6 shadow-sm shadow-primary/10 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
          About
        </p>
        <p className="pt-5 text-left text-base font-medium leading-8 text-foreground/90 sm:text-lg">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Parturient
          quisque diam lobortis eget ad dui inceptos feugiat. Orci mauris
          dapibus mauris interdum maximus fusce sed maximus. Dui fringilla
          aliquet turpis nibh mus ad. Torquent porta accumsan eleifend fermentum
          mollis vel ante. In enim rutrum luctus ultrices lacinia, amet
          fringilla. Vulputate enim tortor primis purus et finibus ultricies.
          Viverra iaculis dolor nunc; eros facilisi habitasse fusce.
        </p>
      </div>
    </section>
  );
};

export default About;
