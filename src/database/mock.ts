import imageCape from "../../public/portfolio.png";
import imageCapeBurguer from "../../public/burguer kenzie.png";
import imageCapeNu from "../../public/nu-kenzie.png";
import imageCapeMea from "../../public/mea-petz.png";
import imageProject from "../../public/portfolio.png";
import imageProjectBurguer from "../../public/burguer-g.png";
import imageProjectNu from "../../public/nu-kenzie-g.png";
import imageProjectMea from "../../public/mea-g.png";
import gifBurgerProject from "../assets/kenzie-burguer.gif";
import gifSEO from "../assets/google-search-gif.gif";
import gifIntegration from "../assets/integracoes-1.gif";
import SEO from "../assets/SEO.png";
import integration from "../assets/native-integrations.svg";

export interface Project {
  name: string;
  imageCape: string;
  imageProject: string;
  demo?: string;
  repo?: string;
  tag?: string;
}

export const projects: Project[] = [
  {
    name: "Nu kenzie",
    imageCape: imageCapeNu,
    imageProject: imageProjectNu,
    demo: "http://example.com",
    repo: "http://example.com",
    tag: "Sites"
  },
  {
    name: "Burguer Kenzie",
    imageCape: imageCapeBurguer,
    imageProject: imageProjectBurguer,
    demo: "http://example.com",
    repo: "http://example.com",
    tag: "Sites"
  },
  {
    name: "Portifolio",
    imageCape: imageCape,
    imageProject: imageProject,
    demo: "http://example.com",
    repo: "http://example.com",
    tag: "Aplicativos"
  },
  {
    name: "Mea petz",
    imageCape: imageCapeMea,
    imageProject: imageProjectMea,
    demo: "http://example.com",
    repo: "http://example.com",
    tag: "Aplicativos"
  }
];

export const initProjects: Omit<Project, "url">[] = [
  {
    name: "Sites",
    imageCape: imageCape,
    imageProject: imageProject
  },
  {
    name: "SEO",
    imageCape: SEO,
    imageProject: gifSEO
  },
  {
    name: "Integrações",
    imageCape: integration,
    imageProject: gifIntegration
  },
  {
    name: "Aplicativos",
    imageCape: imageCapeBurguer,
    imageProject: gifBurgerProject
  }
];

export const categories = ["Sites", "Aplicativos", "Integrações", "SEO"];

export const aplications = {
  title: "Serviço de Criação de Aplicativos:",
  description: "Inovação, Custo Acessível e Usabilidade Excepcional",
  tag: "Aplicativos",
  initContent:
    "Desenvolvemos uma ampla variedade de aplicativos com foco em segurança e conformidade com a LGPD. Nossos serviços incluem aplicativos de:",
  finalContent:
    "Além disso, oferecemos uma abordagem de desenvolvimento acessível, sem comprometer a qualidade e a usabilidade do produto final. Potencialize sua presença digital!",
  topics: [
    "Comércio Eletrônico",
    "Aplicativos Corporativos",
    "Saúde",
    "Serviços",
    "Entretenimento",
    "Educação",
    "E-commerce",
    "SAAS",
    "Finanças",
    "Idiomas",
    "Notícias e clima",
    "Guia Comercial",
    "Viagem",
    "Marketplace"
  ]
};

export const websites = {
  title: "Serviço de Criação de Sites: ",
  tag: "Sites",
  initContent: "Desempenho + Custo Acessível + SEO Avançado",
  finalContent: "",
  topics: [
    "Oferecemos a criação de sites com tecnologias de ponta, garantindo desempenho rápido, adaptabilidade nos dispositivos e posicionamento eficiente nos mecanismos de busca.",
    "Nossa abordagem mantém os custos acessíveis e excelente destaque online comparado ao Wordpress."
  ]
};

export const integrations = {
  title: "Serviço de Integrações:",
  description: "Conectividade Eficiente e Segura",
  tag: "Integrações",
  initContent:
    "Oferecemos soluções completas de integrações para sua empresa, com conectividade eficiente entre sistemas e plataformas com segurança. Realizamos integração de:",
  finalContent:
    "Asseguramos que todas as integrações sejam executadas com máxima proteção de seus dados e informações sensíveis. Simplifique e potencialize seus processos!",
  topics: [
    "Sistemas: Otimizamos processos internos com o intuito de aumentar a eficiência operacional.",
    "APIs: Desenvolvemos integrações personalizadas com APIs de terceiros para expandir a funcionalidade dos seus sistemas.",
    "Dados: Garantimos a sincronização de dados entre diferentes plataformas, para manter consistência e integridade das informações.",
    "Pagamentos: Simplificamos a gestão de pagamentos online, integrando soluções seguras e confiáveis.",
    "Plataformas E-commerce: Conectamos seu e-commerce a diversos marketplaces, ampliando sua visibilidade e alcance."
  ]
};

export const seo = {
  title: "Serviço de Otimização de SEO",
  description: "Para Sites Criados com Código Personalizado",
  tag: "SEO",
  initContent:
    "Oferecemos um serviço de otimização de SEO altamente especializado, focado em sites criados com código personalizado. Nossos serviços incluem.",
  finalContent: "",
  topics: [
    "Análise Técnica: Anánise de oportunidades de otimização técnica no código do site, garantindo estrutura amigável aos motores de busca.",
    "Pesquisa de Palavras-Chave: Identificamos as mais relevantes para o seu negócio, afim de ser encontrado pelo público que realmente procura pelos seus produtos ou serviços.",
    "Conteúdo Otimizado: Produzimos conteúdo de alta qualidade e otimizado para palavras-chave selecionadas, otimizando a relevância do seu site em pesquisas online.",
    "Link Building Responsável: Estratégias éticas e de qualidade para destacar sua autoridade e melhorar seu posicionamento na rede.",
    "Velocidade e Desempenho: Garantimos carregamento rápido de seu site e junto com experiência de usuário superior."
  ]
};
