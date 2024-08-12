import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { education } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const EducationCard = ({ index, degree, school_name, date, details, icon, iconBg }) => {
  return (
    <Tilt className="xs:w-[370px] w-full"> 
      <motion.div
        variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[2px] rounded-[25px] shadow-card" // Increased padding and rounded corners
      >
        <div
          style={{ backgroundColor: iconBg }}
          className="bg-tertiary rounded-[25px] py-12 px-16 min-h-[430px] flex flex-col justify-evenly items-center" // Increased padding and height
        >
          <img src={icon} alt={school_name} className="w-24 h-24 object-contain" /> {/* Increased icon size */}
          <h3 className="text-white text-[24px] font-bold text-center">{degree}</h3> {/* Increased text size */}
          <p className="text-secondary text-[18px] text-center">{school_name}</p> {/* Increased text size */}
          <p className="text-secondary text-[16px] text-center">{date}</p> {/* Increased text size */}
          <ul className="text-white font-bold mt-4 list-disc text-left text-secondary text-[18px] px-4"> {/* Increased text size */}
            {details.map((detail, index) => (
              <li key={index}>
              {/* Apply conditional styling */}
              <span className="text-white">Stream: </span>
              <span className="text-purple-300">
                {detail.includes("CSE") ? "CSE" : detail.includes("Science") ? "Science" : detail}
              </span>
            </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Tilt>
  );
};

  
  const Education = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Education</p>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are the educational qualifications I have achieved over the years.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-10">
          {education.map((educationItem, index) => (
            <EducationCard key={educationItem.degree} index={index} {...educationItem} />
          ))}
        </div>
      </>
    );
  };
  
  export default SectionWrapper(Education, "education");
