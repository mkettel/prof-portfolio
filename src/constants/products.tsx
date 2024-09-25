import chapgenhome from "public/images/chap-gen-home.png";
import chapgenDash from "public/images/chap-gen-dash.png";
import gabbysDollhouseFPage from "public/images/g-dollhouse-fpage.png";
import gabbysDollhouseHome from "public/images/g-dollhouse-home.png";
import gabbysDollhouseCharacter from "public/images/g-dollhouse-character.png";
import oravaiHome from "public/images/oravai-home.png";
import thumbGenDash from "public/images/thumb-gen-dash.png";
import thumbGenProduct from "public/images/thumb-gen-product.png";
import thumbGenCode from "public/images/thumb-gen-code.png";
import oravaiDocMobile from "public/images/oravai-doc-mobile.png";
import oravaiDocCard from "public/images/oravai-doc-card.png";
import chapGenGen from "public/images/chap-gen-generated.png";
import djHome from "public/images/dj-home.png";
import djModal from "public/images/dj-modal.png";
import djCode from "public/images/dj-code.png";

export const products = [
  {
    href: "https://chapter-gen.vercel.app/",
    title: "ChapGen",
    description:
      "A YouTube multitool that helps optimize your channel for growth through AI generated chapters, keywords, titles, and other content.",
    thumbnail: chapgenhome,
    images: [chapgenDash, chapGenGen],  
    stack: ["Nextjs", "Tailwindcss", "Framer Motion", "AI"],
    client: "PXL Agency",
    clientBlurb: "Made for and with the wonderful team at",
    slug: "chapgen",
    content: (
      <div>
        <p>
        Originally started as an experiment to explore the implementation of AI tools for targeted use cases, 
        the goal was to develop a solution that enhances video discoverability. It utilizes a combination of AI 
        and machine learning to analyze the video&apos;s transcript, along with data from the YouTube API, to create 
        optimized content tailored to the user&apos;s needs.
          {" "}
        </p>
        <p>
        One unique feature is the ability for users to customize the chapter generation prompt, 
        allowing them to adjust and refine the output. This flexibility enables ongoing feedback, 
        making the tool adaptable and continuously improving based on user input. Another key feature is that the user
        can click on the generated chapters to jump to that part of the video. This is a great way to help users navigate
        through the content and confirm that the generated chapters are accurate.
          {" "}
        </p>
        <p>
        Building this tool has been a rewarding experience. It&apos;s exciting to see how it empowers creators to grow their channels 
        while learning more about integrating AI into workflow automation. I&apos;ve gained valuable insights into the power of these models, 
        particularly around fine-tuning them for even more accurate content generation. There are several plans for future features and 
        enhancements to make the tool even more impactful.
          {" "}
        </p>
        {" "}
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
        This internal tool is designed to streamline the thumbnail creation process for our 
        YouTube optimization team, allowing for faster and more efficient production. It leverages specific 
        templates based on the client&apos;s segment, enabling users to pull in images directly from YouTube 
        or upload them from their computer. 
          {" "}
        </p>
        <p>
        Using a combination of Sharp and Canvas, users can overlay PNG assets and customize various features 
        of the thumbnail according to the segment&apos;s configuration needs. Once finalized, the thumbnail can be 
        uploaded directly to the YouTube channel.
        </p>
        <p>
        Built with Next.js, Sharp, Tailwind, and Framer Motion, this tool offers flexibility and responsiveness. 
        Future plans include integrating AI-driven features to suggest thumbnails or generate additional content to 
        further enhance the tool&apos;s capabilities.
        </p>
        {" "}
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
        As the lead on the frontend development team, I was responsible for building the international website for the popular 
        children&apos;s show Gabby&apos;s Dollhouse. The site was developed using Vue.js for the frontend, integrated with a PHP-based 
        CMS on the backend to dynamically serve content. The vibrant and playful design of the site made the build especially enjoyable. {" "}
        </p>
        <p>
        The website was designed to be fully responsive and optimized to handle high traffic volumes. Performance optimization and intuitive 
        navigation were key priorities, ensuring a seamless experience for users. Additionally, as an international site, we implemented multilingual 
        support, allowing content to be automatically translated based on the user&apos;s language preferences. {" "}
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
    images: [oravaiDocMobile, oravaiDocCard],
    stack: ["Nextjs", "Tailwindcss", "Framer Motion", "Drizzle ORM", "MySQL"],
    client: "Vail Health",
    clientBlurb: "Built for",
    slug: "oravai",
    content: (
      <div>
        <p>
        Oravai is an open-source tool designed to help medical professionals efficiently track and manage preference cards for the operating room. 
        In the fast-paced, high-pressure environment of an OR, having a centralized system to store crucial information for each doctor, surgical team, 
        and procedure is essential for maintaining organization and ensuring smooth operations. Unfortunately, many existing tools are outdated and not 
        user-friendly, which inspired me to create this modern solution.{" "}
        </p>
        <p>
        Built with Next.js, Tailwind CSS, Framer Motion, Drizzle ORM, and MySQL, Oravai is engineered to be both performant and easy to use. 
        I&apos;ve been working closely with medical professionals to ensure that the tool aligns with their real-world needs, prioritizing usability 
        and functionality. A rewarding part of this process has been designing the user experience from the perspective of someone using it in 
        high-stress situations, where quick access to the right information is critical. Striking a balance between intuitive design and seamless 
        UX has been key to making Oravai a tool that staff will want to use under pressure. {" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://dj-one.vercel.app/",
    title: "DJ Invite",
    description:
      "A fun custom party invite I made for a friends' DJ event",
    thumbnail: djHome,
    images: [djModal, djCode],
    stack: ["Nextjs", "Tailwindcss", "Framer Motion", "React Three Fiber" ],
    client: "Friend",
    clientBlurb: "Built for a ",
    slug: "djinvite",
    content: (
      <div>
        <p>
        One weekend, I decided to challenge myself with a fun project—creating a custom 3D invitation for a friend&apos;s 
        upcoming DJ event. Inspired by the playful invitations on Partiful, I wanted to capture that same energy 
        but with a twist: incorporating 3D elements.
        {" "}
        </p>
        <p>
        The first step was finding a 3D model of a turntable because, let&apos;s be honest, modeling one myself would&apos;ve taken ages! 
        I found a free one, converted it from GLTF to a React Three Fiber component, and hit the ground running.
        {" "}
        </p>
        <p>
        The goal was simple: give people a cool spot to RSVP. I built a modal that connected to an email service so I&apos;d get notified when 
        someone RSVP&apos;d. With the core functionality in place, it was time to crank up the vibe. I added a custom shader for the background, 
        wrapping the scene in a giant sphere with a neon, color-changing atmosphere, and threw in some camera controls tied to mouse movement 
        for a bit of interactivity.
        {" "}
        </p>
        <p>
        Of course, a 3D turntable wouldn&apos;t be complete without music, so I rigged it to play a track from YouTube when the play button was pressed.
        {" "}
        </p>
        <p>
        While I ran out of time before the event to add everything I envisioned, I was proud of the result and learned a ton in the process. 
        Next time, I&apos;ll definitely spend more time optimizing the model to improve performance—but hey, that&apos;s what projects like this are all about! {" "}
        </p>
        
        {" "}
      </div>
    ),
  },
];
