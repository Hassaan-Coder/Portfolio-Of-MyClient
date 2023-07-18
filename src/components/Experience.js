import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>

        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Designs"
            company="Adobe"
            companyLink="https://www.adobe.com/"
            work="Adobe's suite of software has become an indispensable part of my creative journey, allowing me to design captivating visuals, edit photos with precision, create compelling videos, and craft unique logos.
            The following delineates the chronicle of my journey in acquiring proficiencies encompassing the realms of photo editing, graphic design, video editing, and logo design "
          />

          <Details
            position="Video Editor"
            company="Adobe Premier Pro"
            companyLink="https://www.adobe.com/products/premiere.html"
            work="My experience with Adobe Premiere Pro for video editing has been transformative. I have completed numerous projects, learning extensively along the way. Now, I have reached a proficient level in video editing, equipped with valuable skills and knowledge. Through experimentation and exploration, I have honed my abilities in assembling footage, applying effects, and color grading"
          />

          <Details
            position="Graphic Designer"
            company="Adobe Illustrator"
            companyLink="https://www.adobe.com/products/illustrator/free-trial-download.html"
            work="
            My experience with Adobe Illustrator for graphic designing has been remarkable. Through numerous projects and continuous learning, I have developed a commendable level of skill in this field. I have gained knowledge in design principles, color theories, and typography. This hands-on experience has sharpened my problem-solving skills and expanded my creative thinking. Today, I am a skilled graphic designer with a good level of expertise in Adobe Illustrator, producing professional-grade designs that meet client expectations"
          />

          <Details
            position="Designs Photo Editor"
            company="Adobe PhotoShop"
            companyLink="https://www.adobe.com/products/photoshop.html"
            work="
Through my experience with Adobe Photoshop, I have gained extensive knowledge and skills in photo editing and designing. Having completed numerous projects, I can confidently perform photo edits and create visually captivating designs. With a keen eye for detail and a passion for design, I deliver high-quality results that meet professional standards. Adobe Photoshop has become an essential tool in my creative journey, empowering me to bring my artistic visions to life efficiently and effectively."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
