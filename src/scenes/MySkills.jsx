import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Skilled in problem-solving and adept at quickly learning new technologies, with a strong foundation in software development and a passion for optimizing processes and enhancing user experience
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>
      
      <div className="md:flex md:justify-between mt-16 gap-10">
  <motion.div
    className="w-full mt-10"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center" >
      <img src="/assets/NET_Core_Logo.svg.png" alt="NET Core" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/1_MF5V_dkybUTcfzwHFh0VSw.jpg" alt="Logo 2" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/PHP-logo.svg.png" alt="PHP" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/Java-Logo.jpg" alt="Java" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/ReactNative.png" alt="React Native" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/Angular_full_color_logo.svg.png" alt="Angular" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/microsoft-sql-server4529.jpg" alt="SQL Server" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/MongoDb.png" alt="MongoDB" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/images.png" alt="" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/Amazon-Web-Services-AWS-Logo (1).png" alt="AWS" className="w-16 h-16 sm:w-20 sm:h-20" />
      <img src="/assets/Azure.png" alt="Azure" className="w-16 h-16 sm:w-20 sm:h-20" />
    </div>
  </motion.div>
  </div>


    </section>
  );
};

export default MySkills;
