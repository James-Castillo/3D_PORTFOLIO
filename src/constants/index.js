import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  github,
  mysql,
  bootstrap,
  angular,
  socialize,
  netflix,
  ecommerce,
  buscador,
  crudangular,
  mysqlapi,
  mongoapi,
  postgres,
  zoom,
  nextjs
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web
  },
  {
    title: "Frontend Developer",
    icon: mobile
  },
  {
    title: "Backend Developer",
    icon: backend
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "MySQL",
    icon: mysql
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "git",
    icon: git
  },
  {
    name: "github",
    icon: github
  },
  {
    name: "bootstrap",
    icon: bootstrap
  },
  {
    name: "angular",
    icon: angular
  },
  {
    name: "nextjs",
    icon: nextjs
  }
];

const experiences = [
  {
    title: "Desarrollador web",
    company_name: "Centro Comercial Mercantil del Llano S.A. de C.V.",
    icon: web,
    iconBg: "#383E56",
    date: "Abril 2023 - Septiembre 2023",
    points: [
      "Desarrollo de una aplicación web en HTML5, CSS3, Javascript y PHP",
      "Mantenimiento de la aplicación web"
    ]
  }
];

const projects = [
  {
    name: "SocializeX",
    description:
      "Una red social en línea que conecta a usuarios, permitiéndoles compartir publicaciones así como interactuar con amigos y seguir a personas de interés. ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "Appwrite",
        color: "green-text-gradient"
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient"
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient"
      }
    ],
    image: socialize,
    source_code_link: "https://github.com/James-Castillo/SocializeX",
    web_code_link:
      "https://socialize-g1nhwyhpa-james-castillos-projects.vercel.app/"
  },
  {
    name: "Zoom-Clone",
    description:
      "Este proyecto, desarrollado con las últimas tecnologías Next.js, TypeScript, Clerk, getstream, Shadcn y Tailwind CSS, recrea Zoom, una herramienta de videoconferencia.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "getstreaming",
        color: "green-text-gradient"
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient"
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient"
      }
    ],
    image: zoom,
    source_code_link: "https://github.com/James-Castillo/zoom_clone",
    web_code_link: "https://zoom-clone-ashy.vercel.app/"
  },
  {
    name: "Netflix-Clone",
    description:
      "Un clon de Netflix creado con fines educativos, utilizando una API REST y autenticación de Google para acceder al contenido de forma segura.",
    tags: [
      {
        name: "Angular",
        color: "red-text-gradient"
      },
      {
        name: "RestApi",
        color: "green-text-gradient"
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient"
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient"
      }
    ],
    image: netflix,
    source_code_link: "https://github.com/James-Castillo/Netflix-Clone",
    web_code_link: "https://netflix-clone-mu-swart.vercel.app/"
  },
  {
    name: "E-commerce",
    description:
      "Una plataforma de comercio electrónico diseñada con propósitos educativos, implementando una API REST para la gestión de productos.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "RestApi",
        color: "green-text-gradient"
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient"
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient"
      }
    ],
    image: ecommerce,
    source_code_link: "https://github.com/James-Castillo/e-commerce-react",
    web_code_link: "https://e-commerce-react-lovat-ten.vercel.app/"
  },
  {
    name: "Buscador de películas",
    description:
      "Una plataforma de películas diseñada con propósitos educativos, implementando una API REST para la busqueda de películas.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient"
      },
      {
        name: "RestApi",
        color: "green-text-gradient"
      },
      {
        name: "CSS",
        color: "pink-text-gradient"
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient"
      }
    ],
    image: buscador,
    source_code_link:
      "https://github.com/James-Castillo/buscador-peliculas-react",
    web_code_link: "https://buscador-peliculas-react-omega.vercel.app/"
  },
  {
    name: "Crud Angular",
    description:
      "Angular CRUD app que gestiona productos consumiendo una REST API creada por mi con Mysql.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient"
      },
      {
        name: "RestApi",
        color: "green-text-gradient"
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient"
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient"
      }
    ],
    image: crudangular,
    source_code_link: "https://github.com/James-Castillo/Crud-Angular",
    web_code_link: "https://crud-angular-ivory.vercel.app/"
  },
  {
    name: "REST API MySQL",
    description:
      "REST API de productos desarrollada con Express y MySQL para realizar operaciones CRUD en una base de datos de productos.",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient"
      },
      {
        name: "Sequalize",
        color: "blue-text-gradient"
      },
      {
        name: "Express",
        color: "pink-text-gradient"
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient"
      }
    ],
    image: mysqlapi,
    source_code_link: "https://github.com/James-Castillo/node-api-rest-mysql",
    web_code_link:
      "https://node-api-rest-mysql-production.up.railway.app/api/productos"
  },
  {
    name: "REST API Mongo",
    description:
      "REST API de productos desarrollada con Express y MongoDB para realizar operaciones CRUD en una base de datos de libros.",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient"
      },
      {
        name: "Docker",
        color: "blue-text-gradient"
      },
      {
        name: "Express",
        color: "pink-text-gradient"
      },
      {
        name: "Javascript",
        color: "yellow-text-gradient"
      }
    ],
    image: mongoapi,
    source_code_link: "https://github.com/James-Castillo/node-api-rest-mongo",
    web_code_link:
      "https://node-api-rest-mongo-production-ed76.up.railway.app/books"
  },
  {
    name: "REST API PostgreSQL",
    description:
      "REST API desarrollada con Express y PostgreSQl para operaciones CRUD en una base de datos de usuarios utilizando JWT.",
    tags: [
      {
        name: "NodeJS",
        color: "green-text-gradient"
      },
      {
        name: "Docker",
        color: "blue-text-gradient"
      },
      {
        name: "Express",
        color: "pink-text-gradient"
      },
      {
        name: "Typescript",
        color: "yellow-text-gradient"
      }
    ],
    image: postgres,
    source_code_link:
      "https://github.com/James-Castillo/node-auth-jwt-api-rest",
    web_code_link:
      "https://node-auth-jwt-api-rest-production-671f.up.railway.app/"
  }
];

export { services, technologies, experiences, projects };
