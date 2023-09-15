import React, { useEffect, useRef, useState } from "react";
import { Project, projects } from "../../database/mock";
import Button from "../Button";

const ListProjects = () => {
  const [projectSelected, setProjectSelected] = useState(projects[0]);
  const [animationDuration, setAnimationDuration] = useState(700);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  let timeoutId: number | null = null;

  const handleMouseEnter = () => {
    const containerHeight = containerRef.current?.clientHeight ?? 0;
    const imageHeight = imageRef.current?.clientHeight ?? 0;
    const maxPosY = containerHeight - imageHeight;
    const imageToContainerRatio = imageHeight / containerHeight;

    const minDuration = 700;
    const maxDuration = 2000;

    const calculatedDuration = minDuration + (maxDuration - minDuration) * imageToContainerRatio;
    setAnimationDuration(calculatedDuration);

    if (imageRef.current) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      imageRef.current.style.transform = `translateY(${maxPosY + 10}px)`;
      imageRef.current.style.transitionDuration = `${calculatedDuration}ms`;
    }
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    imageRef.current && (imageRef.current.style.transitionDuration = `${animationDuration}ms`);
    imageRef.current && (imageRef.current.style.transform = "translateY(0)");
  };

  const handleChangeProject = (project: Project) => {
    setProjectSelected(project);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      setAnimationDuration(0);
    }, animationDuration);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-around gap-10">
      <ul className="container-card-project  2xl:grid-cols-2">
        {projects.map((project) => (
          <li className="card-project group" key={project.name}>
            <img
              src={project.imageCape}
              alt="imagem do projeto"
              className="w-full h-full object-cover group-hover:scale-150 transition-all ease-in-out duration-500"
              onMouseEnter={() => windowWidth <= 1535 && handleChangeProject(project)}
              onClick={() => windowWidth > 1536 && handleChangeProject(project)}
            />
            <span className="absolute bottom-5 z-10 w-full text-center font-semibold text-base group-hover:text-xl text-white transition-all  ease-in-out duration-500">
              {project.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-y-5">
        <h4 className="text-center">{projectSelected.name}</h4>
        <div
          className="w-[600px] h-[500px] bg-pink-500 overflow-hidden"
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <img
            src={projectSelected.imageProject}
            alt="imagem do projeto"
            className=""
            ref={imageRef}
          />
        </div>
        <div className="flex gap-5">
          <Button className="btn-second w-60">
            <a href={projectSelected.demo}>Demo</a>
          </Button>
          <Button className="btn-outline-primary w-60">
            <a href={projectSelected.repo}>Repositório</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListProjects;
