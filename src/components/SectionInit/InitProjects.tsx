import "react";
import { useState } from "react";
import { Project, initProjects } from "../../database/mock";
import Typography from "../Typography";
import Button from "../Button";

const InitProjects = () => {
  const [projectImage, setProjectImage] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = (project: Project) => {
    setProjectImage(project.imageProject);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setProjectImage("");
  };

  return (
    <div className="relative w-full h-[550px] flex mb-[100px] flex-col items-center gap-[100px]">
      <div
        className={`w-full absolute top-0 left-0 z-10 h-[540px] bg-gradient-to-b from-grey-700 to-primary-700/80 ${
          isHovering ? "opacity-40" : "opacity-100"
        }`}></div>
      <img
        src={projectImage}
        alt="page-bg"
        className={`absolute top-0 left-0 w-full min-h-[540px] lg:h-[540px] object-cover inset-0 z-0 ${
          isHovering ? "opacity-100 transition duration-500" : "opacity-0 transition duration-500"
        }`}
      />

      <div className="w-2/4 flex flex-col items-center gap-[80px] z-20">
        <Typography variant="h1" className="text-white text-center pt-[130px]">Dê vida às suas ideias e ao seu negócio com a nossa ajuda!</Typography>
        <Button className="btn-second w-[300px]">Vamos Começar!</Button>
      </div>

      <div className="flex justify-center absolute -bottom-[100px] w-full z-20">
        <ul className="w-full flex justify-center min-h-[180px] gap-24 overflow-auto scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-track-rounded-md scrollbar-track-slate-200 scrollbar-thumb-rounded-md ">
          {initProjects.map((project) => (
            <li
              className="flex justify-center relative w-[7rem] min-w-[7rem] h-[7rem] min-h-[7rem] border-4 rounded-full cursor-pointer hover:border-slate-500 transition ease-in delay-200"
              key={project.name}>
              <img
                src={project.imageCape}
                alt="imagem do projeto"
                className="w-full h-full object-cover rounded-full"
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              />
              <span className="absolute -bottom-8 font-semibold text-xs text-black font-['Poppins']">
                {project.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InitProjects;
