import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";

const Skills = () => {
  return (
    <div id="skills" className="w-full px-12 py-10 flex justify-center">
      <div className="w-full h-full flex flex-col">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        </div>
        <div className="w-full flex justify-center">
          <div className="xl:border-l-2 xl:border-r-2 xl:border-primary-400 h-full xl:w-[85%]">
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
              <MarqueeCards direction="left">
                <SkillsCards />
              </MarqueeCards>
            </div>
            <div className="relative">
              <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>
              <MarqueeCards direction="right">
                <SkillsCards />
              </MarqueeCards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
