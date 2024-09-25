import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import chapgenhome from "public/images/chap-gen-home.png";
import chapgenDash from "public/images/chap-gen-dash.png";
import gabbysDollhouseFPage from "public/images/g-dollhouse-fpage.png";
import gabbysDollhouseHome from "public/images/g-dollhouse-home.png";
import gabbysDollhouseCharacter from "public/images/g-dollhouse-character.png";
import oravaiHome from "public/images/oravai-home.png";
import thumbGenDash from "public/images/thumb-gen-dash.png";
import thumbGenProduct from "public/images/thumb-gen-product.png";
import thumbGenCode from "public/images/thumb-gen-code.png";

export const products = [
  {
    href: "https://chapter-gen.vercel.app/",
    title: "ChapGen",
    description:
      "A YouTube multitool that helps optimize your channel for growth through AI generated chapters, keywords, titles, and other content.",
    thumbnail: chapgenhome,
    images: [chapgenDash, sidefolioAceternity2],  
    stack: ["Nextjs", "Tailwindcss", "Framer Motion", "AI"],
    client: "PXL Agency",
    clientBlurb: "Made for and with the wonderful team at",
    slug: "chapgen",
    content: (
      <div>
        <p>
          This tool started as an experiment to see if I could build something to aid with generating chapters for videos on YouTube to 
          help with channel optimization. I used next.js, integrated open AI api to generate the content, and used tailwindcss for styling.
          
          {" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://thumbnail-generator-dev.pxlagency.com/",
    title: "Thumbnail Generator",
    description:
      "Internal tool to help create thumbnails for clients in a more efficient manner.",
    thumbnail: thumbGenDash,
    images: [thumbGenProduct, thumbGenCode],
    stack: ["Nextjs", "Tailwindcss", "Framer Motion", "Canvas"],
    client: "PXL Agency",
    clientBlurb: "Made for and with the wonderful team at",
    slug: "thumbnailgenerator",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.gabbysdollhouse.com/",
    title: "Gabby's Dollhouse",
    description:
      "International website for the popular children's show Gabby's Dollhouse.",
    thumbnail: gabbysDollhouseHome,
    images: [gabbysDollhouseFPage, gabbysDollhouseCharacter],
    stack: ["Vue.js", "SCSS", "PHP", "MySQL"],
    client: "Dreamworks",
    clientBlurb: "Built with PXL Agency for",
    slug: "gabbysdollhouse",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://oravai-app.vercel.app/",
    title: "Oravai",
    description:
      "Open-source tool to help medical professionals track and prepare preference cards for the operating room.",
    thumbnail: oravaiHome,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss", "Framer Motion", "Drizzle ORM", "MySQL"],
    client: "Vail Health",
    clientBlurb: "Built for",
    slug: "oravai",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
