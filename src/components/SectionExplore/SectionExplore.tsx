import { useState } from "react";
import {
  categories,
  projects,
  aplications,
  integrations,
  seo,
  websites
} from "../../database/mock.js";
import { MdOutlineSettingsCell, MdCorporateFare } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiSeoLine } from "react-icons/ri";
import imageGraphic from "../../../public/astro-graphic.png";
import { ContentByCategory } from "./ContentByCategory/index.js";
import { Graphic } from "./AstroGraphic/Graphic.js";
import { ContentByCategoryTopic } from "./ContentByCategory/ContentByCategoryTopic.js";
import Typography from "../Typography/index.js";

const SectionExplore = () => {
  const [categorySelected, setCategorySelect] = useState(categories[0]);

  return (
    <section className="flex flex-col w-full gap-20" id="services">
      <div className="flex flex-col gap-5">
        <Typography variant="h2" className="text-center">
          <span className="text-primary-500 text-xl md:text-3xl font-bold">Explore</span> nossas
          soluções e nossos serviços
        </Typography>
        <Typography variant="body" className="text-center text-grey-300 font-bold">
          {" "}
          Todo serviço é personalisado e criado com o que há de mais moderno em tecnologia e SEO
          centrado
        </Typography>
      </div>
      <nav className="flex justify-center">
        <ul className="flex justify-start gap-5 overflow-x-auto pb-1 scrollbar scrollbar-w-2 scrollbar-h-1 scrollbar-track-rounded-md scrollbar-track-slate-200 scrollbar-thumb-rounded-md scrollbar-thumb-primary-300">
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                className={`button-nav ${
                  categorySelected == category &&
                  "bg-primary-100 text-white border-primary-100 rounded-full"
                }`}
                onClick={() => setCategorySelect(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-4xl">
          {categorySelected == "Sites" && (
            <ContentByCategory.Root className="flex flex-col gap-7">
              <ContentByCategory.Title title={websites.title} className="text-center text-2xl" />
              <ContentByCategory.ContainerText
                children={websites.initContent}
                className="text-center text-2xl mb-1"
              />
              {/* Criar uma div container para o text */}
              <div className="flex flex-col gap-4 w-full pl-8">
                <div
                  className="flex
                 items-center gap-5">
                  <ContentByCategory.ContainerText
                    children={websites.topics[0]}
                    className="text-lg mb-1 list-item"
                  />
                </div>
                <div
                  className="flex
                 items-center gap-5">
                  <ContentByCategory.ContainerText
                    children={websites.topics[1]}
                    className="text-lg mb-1 list-item"
                  />
                </div>
              </div>
              <ContentByCategory.Title
                title="Comparação de Desempenho das Tecnologias na Prática"
                className="text-center text-xl"
              />
              <Graphic />
            </ContentByCategory.Root>
          )}
          {categorySelected == "Aplicativos" && (
            <ContentByCategory.Root>
              <ContentByCategory.Title
                title={aplications.title}
                className="text-center text-2xl mb-4"
              />
              <ContentByCategory.ContainerText className="flex justify-center items-center">
                <span className="text-center text-2xl mb-1">{aplications.description}</span>
              </ContentByCategory.ContainerText>
              <ContentByCategory.ContainerText className="flex mt-5">
                <p>
                  Desenvolvemos uma ampla variedade de aplicativos com foco em segurança e
                  conformidade com a <span className="font-semibold">LGPD</span>.
                </p>
              </ContentByCategory.ContainerText>
              <div className="flex flex-col gap-4">
                <p className="mt-3">Nossos serviços incluem aplicativos de:</p>
                <ContentByCategory.ContainerText className="grid grid-cols-3 list-none gap-2">
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[6]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[0]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdCorporateFare className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[1]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[2]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[3]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[4]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[5]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[7]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[8]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[9]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[10]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[11]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[12]} />
                  </div>
                  <div
                    className="flex
                 items-center gap-5">
                    <MdOutlineSettingsCell className="text-xl text-secondary-500" />
                    <ContentByCategory.Topic topic={aplications.topics[13]} />
                  </div>
                </ContentByCategory.ContainerText>
              </div>

              <ContentByCategory.ContainerText className="flex justify-center items-center mt-5">
                <p>{aplications.finalContent}</p>
              </ContentByCategory.ContainerText>
            </ContentByCategory.Root>
          )}
          {categorySelected == "Integrações" && (
            <ContentByCategory.Root>
              <ContentByCategory.Title
                className="text-center text-2xl mb-4"
                title={integrations.title}
              />
              <ContentByCategory.ContainerText className="flex justify-center items-center">
                <span className="text-center text-2xl mb-1">{integrations.description}</span>
              </ContentByCategory.ContainerText>
              <ContentByCategory.ContainerText className="grid grid-cols-2">
                <div
                  className="flex flex-col
                 items-center list-none">
                  <ContentByCategory.Topic
                    topic={integrations.topics[0].slice(0, 9)}
                    className="font-semibold"
                  />
                  <ContentByCategory.Topic topic={integrations.topics[0].slice(9)} className="" />
                </div>
                <div
                  className="flex
                 items-center flex-col list-none">
                  <ContentByCategory.Topic
                    topic={integrations.topics[1].slice(0, 5)}
                    className="font-semibold"
                  />
                  <ContentByCategory.Topic topic={integrations.topics[1].slice(5)} className="" />
                </div>
                <div
                  className="flex
                 items-center flex-col list-none">
                  <ContentByCategory.Topic
                    topic={integrations.topics[2].slice(0, 6)}
                    className="font-semibold"
                  />
                  <ContentByCategory.Topic topic={integrations.topics[2].slice(7)} className="" />
                </div>
                <div
                  className="flex
                 items-center flex-col list-none">
                  <ContentByCategory.Topic
                    topic={integrations.topics[3].slice(0, 11)}
                    className="font-semibold"
                  />
                  <ContentByCategory.Topic topic={integrations.topics[3].slice(12)} className="" />
                </div>
                <div
                  className="flex
                 items-center flex-col list-none">
                  <ContentByCategory.Topic
                    topic={integrations.topics[4].slice(0, 23)}
                    className="font-semibold"
                  />
                  <ContentByCategory.Topic topic={integrations.topics[4].slice(23)} className="" />
                </div>
              </ContentByCategory.ContainerText>
            </ContentByCategory.Root>
          )}
          {categorySelected == "SEO" && (
            <ContentByCategory.Root>
              <ContentByCategory.Title className="text-center text-2xl mb-4" title={seo.title} />
              <ContentByCategory.ContainerText className="flex justify-center items-center">
                <span className="text-center text-2xl mb-1">{seo.description}</span>
              </ContentByCategory.ContainerText>
            </ContentByCategory.Root>
          )}
        </div>
        {/* <div>
          <ul
            className="container-card-project lg:pl-20  
          ">
            {projects.map(
              (project) =>
                project.tag == categorySelected && (
                  <li className="card-project group" key={project.name + "@$"}>
                    <a href={project.demo}>
                      <img
                        src={project.imageCape}
                        alt="imagem do projeto"
                        className="w-full h-full object-cover group-hover:scale-150 transition-all ease-in-out duration-500"
                      />
                      <span className="absolute bottom-5 z-10 w-full text-center font-semibold text-xl opacity-0 group-hover:opacity-100 text-white transition-all ease-in-out duration-500">
                        {project.name}
                      </span>
                    </a>
                  </li>
                )
            )}
          </ul>
        </div> */}
      </div>
    </section>
  );
};

export default SectionExplore;
