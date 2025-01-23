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
import optikalHomepage from "public/images/optikal-homepage.png";
import optikalLeads from "public/images/optikal-leads.png";
import optikalConduction from "public/images/optikal-conduction.png";
import sjHome from "public/images/sj-Home.png"
import sjPageOne from "public/images/sj-page-1.png"
import sjPageLast from "public/images/sj-page-last.png"

export const products = [
  {
    id: 1, 
    href: "https://opti-ecg.com/",
    title: "Opti",
    description:
      "Educational resource for understanding and learning about EKGs in a 3D visualization experience.",
    thumbnail: optikalHomepage,
    images: [optikalConduction, optikalLeads],  
    stack: ["Nextjs", "React", "Tailwindcss", "Framer Motion", "AI", "Blender", "Three.js"],
    client: "me",
    clientBlurb: "Made for the world by",
    slug: "optikal-ekg",
    content: (
      <div>
        <p>
        I first thought of this project when I was working as a cardiology tech at a hospital years ago. I was tasked with reading and monitoring EKGs all day long to make sure that 
        patients were not having any heart issues. It was interesting and challenging work and I realized pretty quickly that the little squiggle lines on the screen tell a much 
        bigger story than what meets the eye. Each squiggle line, in each different lead, tells a different story about what the heart is doing at that moment in an 
        electrical, mechanical, and hemodynamic sense. This is not only fasinating but extremely complex and very difficult to visualize and understand. I wondered why 
        has there not been a translation from the squiggle to the visual? If we are doing this all day long in our heads to decipher what is going on, why not build a 
        tool that can do this for us? This is where the idea for Optikal EKG was born.
          {" "}
        </p>
        <p>
          This is an ongoing project for me. I have started with walkthrough modules. These modules aim to teach the user the basics of the electrical conduction system components 
          of the heart and how they are represented in an EKG. The other walkthrough module that I have implemented is a visualization of the 12 leads of an EKG and their 
          viewpoint on the heart. The goal here is to help understand how the spatial orientation of the leads lead to differences in the EKG waveform. I believe that building
          this mental model will help students and professionals cultivate a deeper understanding of how and EKG is really looking at the heart and what it is telling us. The 
          roadmap for the project is vast, with big goals ahead. Realtime animations of differnent heart rhythms, with deep dives on the pathology that leads to each one. Interactive 
          quizzes, and with the largest goal of realtime visualization of real heart data from an EKG. This is a project that I am very passionate about and I am excited to see where
          it goes ❤️
        </p>
        {" "}
      </div>
    ),
  },
  {
    id: 2, 
    href: "https://chapter-gen.vercel.app/",
    title: "ChapGen",
    description:
      "A YouTube multitool that helps optimize your channel for growth through AI generated chapters, keywords, titles, analytics and other content.",
    thumbnail: chapgenhome,
    images: [chapgenDash, chapGenGen],  
    stack: ["Nextjs", "React", "Tailwindcss", "Framer Motion", "AI"],
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
        particularly around fine-tuning them for even more accurate content generation. A new feature that has been implemented is an anlytics dashboard.
        This dashboard allows the users to get data from any time period they select and they are able to generate a comparison trendline against this period from the same
        time the previous year, the same period selected but just right before, or since the optimization began. There are several plans for future features and 
        enhancements to make the tool even more impactful.
          {" "}
        </p>
        {" "}
      </div>
    ),
  },
  {
    id: 3, 
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "LookBook",
    description:
      "An interactive 3D photo book that uses advanced animations and custom designs to celebrate my friends' wedding.",
    thumbnail: sjHome,
    images: [sjPageOne, sjPageLast],  
    stack: ["React", "React Three Fiber", "Three.js", "Tailwindcss", "Framer Motion"],
    client: "Some Buddies",
    clientBlurb: "Made with love for",
    slug: "lookbook",
    content: (
      <div>
        <p>
          LookBook is a custom-built 3D digital book created to celebrate my friends' wedding by showcasing their photos in an immersive, interactive experience.
          This project combines meaningful design with technical complexity to create a unique way of sharing memories.
        </p>
        <p>
          The project is built with <strong className="text-white">React Three Fiber</strong> for rendering the 3D scene and <strong className="text-white">Three.js</strong> for advanced geometry manipulation. 
          I used the <strong className="text-white">Wigglebones</strong> library to integrate a skeleton system into the page meshes, enabling smooth bending animations as the pages turn.
          Each page mesh is skinned with bones, and vertex weights are calculated dynamically to ensure natural deformation during animations.
        </p>
        <p>
          Textures are applied using <strong className="text-white">alpha maps</strong> for detailed, glossy reflections, adding realism to the front and back covers. 
          The project also employs custom shaders and materials for the pages, combining image textures with emissive highlights to enhance interactivity and visual appeal.
        </p>
        <p>
          To ensure performance and scalability, I preloaded textures for all pages and optimized the geometry by reusing a single mesh structure for the entire book. 
          Animations, like page-turning, are controlled with dynamic state updates and easing functions, providing a smooth user experience.
        </p>
        <p>
          Due to the personal nature of the photos, the project is not publicly available. However, I’d be happy to share a private link—just shoot me a message!
        </p>
      </div>
    ),
  },  
  {
    id: 4, 
    href: "https://thumbnail-generator-dev.pxlagency.com/",
    title: "Thumbnail Generator",
    description:
      "Internal tool to help create thumbnails for clients in a more efficient manner.",
    thumbnail: thumbGenDash,
    images: [thumbGenProduct, thumbGenCode],
    stack: ["Nextjs", "React", "Tailwindcss", "Framer Motion", "Canvas"],
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
    id: 5,
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
    id: 6,
    href: "https://oravai-app.vercel.app/",
    title: "Oravai",
    description:
      "Open-source tool to help medical professionals track and prepare preference cards for the operating room.",
    thumbnail: oravaiHome,
    images: [oravaiDocMobile, oravaiDocCard],
    stack: ["Nextjs", "React", "Tailwindcss", "Framer Motion", "Drizzle ORM", "MySQL"],
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
    id: 7,
    href: "https://dj-one.vercel.app/",
    title: "DJ Invite",
    description:
      "A fun custom party invite I made for a friends' DJ event",
    thumbnail: djHome,
    images: [djModal, djCode],
    stack: ["Nextjs", "React", "Tailwindcss", "Framer Motion", "React Three Fiber" ],
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
