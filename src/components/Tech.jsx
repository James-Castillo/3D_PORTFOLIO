import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap items-center gap-5 md:flex-row md:flex-wrap md:justify-center md:gap-10 justify-center">
      {technologies.map((technology) => (
        <div className="w-20 h-20" key={technology.name}>
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");