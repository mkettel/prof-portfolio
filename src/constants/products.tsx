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
import optikalHomepage from "public/images/opti-home-new.png";
import optikalLeads from "public/images/optikal-leads.png";
import optikalConduction from "public/images/optikal-conduction.png";
import optiSimulator from "public/images/opti-simulator.png";
import optiAxis from "public/images/opti-axis.png";
import sjHome from "public/images/sj-home.png";
import sjPageOne from "public/images/sj-page-1.png";
import sjPageLast from "public/images/sj-page-last.png";
import pxlagencyHome from "public/images/pxl-thumb.png";
import pxlagencyvideo from "public/images/pxl-2.png";
import pxlcontact from "public/images/pxl-contact.png";
import dreamworks from "public/images/dreamworks-home.png";
import robotabout from "public/images/robot-about.png";
import robouthome from "public/images/robot-home.png";
import { MediaItem } from "@/types/products";
import auwSound from "public/images/auw-sound.png";
import auwFooter from "public/images/auw-footer.png";
import symhome from "public/images/sym-home.png";
import symsteroids from "public/images/sym-stero.png";
import symmolecules from "public/images/sym-molecules.png";
import sympractices from "public/images/sym-practice.png";

// Helper to create MediaItems with proper typing
const reel = (src: string): MediaItem => ({ type: "reel", src });
const video = (src: string): MediaItem => ({ type: "video", src });

export const products = [
  {
    id: 1,
    href: "https://symmetriachem.com/",
    title: "Symmetria",
    description: "3D general and organic chemistry learning platform.",
    thumbnail: symhome,
    images: [symsteroids, symmolecules, sympractices],
    stack: [
      "Nextjs",
      "React",
      "Tailwindcss",
      "Framer Motion",
      "AI",
      "Blender",
      "Three.js",
      "React Three Fiber",
      "Stripe",
    ],
    client: "me",
    clientBlurb: "Made for the world by",
    slug: "symmetria",
    content: (
      <div>
        <p>
          Back in college, I loved organic chemistry because of how spatial and
          visual it was. However, that also meant it was always difficult to
          learn many of the concepts. I had thought back then that it would be
          great to have a way to visualize and interact with the concepts in a
          more engaging way. Sitting in the back of an inorganic chemistry class
          attempting to learn symmetry elements was very frustrating and thus
          the idea for Symmetria was born.{" "}
        </p>
        <p>
          This is another ongoing project for me. I plan to add more and more
          concepts, and quizzes to help solidify the platform. Check it out and
          if you have any suggestions, bugs, or feature requests, please let me
          know!
        </p>{" "}
      </div>
    ),
  },
  {
    id: 2,
    href: "https://opti-ecg.com/",
    title: "Opti",
    description:
      "Educational resource for understanding and learning about EKGs in a 3D visualization experience.",
    thumbnail: optikalHomepage,
    images: [optikalConduction, optiAxis, optiSimulator, optikalLeads],
    stack: [
      "Nextjs",
      "React",
      "Tailwindcss",
      "Framer Motion",
      "AI",
      "Blender",
      "Three.js",
      "Recharts",
      "Stripe",
    ],
    client: "me",
    clientBlurb: "Made for the world by",
    slug: "optikal-ekg",
    content: (
      <div>
        <p>
          I first thought of this project when I was working as a cardiology
          tech at a hospital years ago. I was tasked with reading and monitoring
          EKGs all day long to make sure that patients were not having any heart
          issues. It was interesting and challenging work and I realized pretty
          quickly that the little squiggle lines on the screen tell a much
          bigger story than what meets the eye. Each squiggle line, in each
          different lead, tells a different story about what the heart is doing
          at that moment in an electrical, mechanical, and hemodynamic sense.
          This is not only fasinating but extremely complex and very difficult
          to visualize and understand. I wondered why has there not been a
          translation from the squiggle to the visual? If we are doing this all
          day long in our heads to decipher what is going on, why not build a
          tool that can do this for us? This is where the idea for Optikal EKG
          was born.{" "}
        </p>
        <p>
          This is an ongoing project for me. I have started with walkthrough
          modules. These modules aim to teach the user the basics of the
          electrical conduction system components of the heart and how they are
          represented in an EKG. The other walkthrough module that I have
          implemented is a visualization of the 12 leads of an EKG and their
          viewpoint on the heart. The goal here is to help understand how the
          spatial orientation of the leads lead to differences in the EKG
          waveform. I believe that building this mental model will help students
          and professionals cultivate a deeper understanding of how and EKG is
          really looking at the heart and what it is telling us. The roadmap for
          the project is vast, with big goals ahead. Realtime animations of
          differnent heart rhythms, with deep dives on the pathology that leads
          to each one. Interactive quizzes, and with the largest goal of
          realtime visualization of real heart data from an EKG. This is a
          project that I am very passionate about and I am excited to see where
          it goes ❤️
        </p>{" "}
      </div>
    ),
  },
  {
    id: 3,
    href: "#",
    title: "AUW - 3D Footer",
    description: "A creative 3D footer for the redesign of the AUW website.",
    thumbnail: auwFooter,
    images: [reel("/videos/auw-footer.mp4")],
    stack: ["Nextjs", "React", "Tailwind", "Three.js", "Blender"],
    client: "AUW",
    clientBlurb: "Built for the creative agency out of NYC, ",
    slug: "auw-3d-footer",
    content: (
      <div>
        <p>
          Working with Jeff for the redesign of his agency website, we wanted to
          create a creative and engaging footer that would stand out. We decided
          to go with a 3D footer displaying the letters of the brand that act as
          windchimes that blow in the wind or upon your mouse moving through the
          letters. We created the 3D letters in{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Blender
          </strong>{" "}
          using the appropriate font for the brand. I exported the letters as a{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            GLTF
          </strong>{" "}
          file, importing them as a{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            React Three Fiber
          </strong>{" "}
          component.
        </p>
        <p>
          To create the windchime effect, I utilized the physics library{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            rapier.js
          </strong>
          . This allowed me to create a gravitational pull on the letters
          leading for them to fall in a natural way. I added anchor spheres out
          of the view of the camera and attached a thin rope to each letter.
          Carefully adjusting the rope length and attachement to the letter to
          allow them to stand up straight and not hang at too much of an angle.
          This was a tough aspect so I used{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Leva
          </strong>{" "}
          to give me a GUI to adjust the rope attachement points in realtime to
          get the perfect position on each letter.
        </p>
        <p>
          For the mouse interaction, I created an invisible sphere mesh that
          acts also as a collider object that follows the position of the mouse.
          when you move the mouse through the letters at the z-axis of 0, the
          sphere will bump into the letter, causing it to swing and move around
          in a natural way.
        </p>
        <p>
          I added some fake wind to keep the scene feeling dynamic and not
          static when the letters are not being interacted with. I added the
          sound for the chime effect using the{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            HTML Audio API
          </strong>
          . I set a frequency for each letter and when the letters collide with
          each other, the letter will play the sound associated with it. The
          scene itself was a fun aspect to create. I utilized{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            soft shadows
          </strong>{" "}
          and added a plane behind the letters to give the scene a bit more
          depth and realism.
        </p>
        <p>
          This was a wonderful project to work on and highly recommend checking
          out the website and working with Jeff and his team for any of your
          design and developement needs!
        </p>
        <p className="text-center font-bold text-red-400">
          This project will be live soon and I will update the URL.
        </p>{" "}
      </div>
    ),
  },
  {
    id: 4,
    href: "#",
    title: "AUW - Listening Experience",
    description:
      "Working with Jeff, the founder and CEO of AUW we built a listening experience for the artist Lou Phelps.",
    thumbnail: auwSound,
    images: [reel("/videos/auw-listening.mp4")],
    stack: ["Nextjs", "React", "Tailwind", "Framer Motion", "ffmpeg", "GSAP"],
    client: "AUW",
    clientBlurb: "Built for the creative agency out of NYC, ",
    slug: "auw",
    content: (
      <div>
        <p>
          Working with Jeff and 3D artist Lucas Geitner, we created an immersive
          audio-visual listening experience. Rather than compromise on quality
          with real-time 3D rendering, we developed a frame-by-frame video
          sequence system that preserves Lucas&apos;s high-fidelity 3D renders
          while enabling smooth, interactive camera movements.
        </p>
        <p>
          I engineered a custom playback system using 280{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            WebP
          </strong>
          -compressed frames organized into six navigable sequences (wide shot,
          left/right record views, and transitions between them). Using{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            GSAP
          </strong>{" "}
          for interpolation and{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Canvas API
          </strong>
          for rendering, the system provides fluid 30fps-like camera movements
          between three interactive viewpoints. I implemented progressive
          loading with priority frames to ensure instant interaction while
          remaining assets load in the background.
        </p>
        <p>
          The audio system is built on the{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Web Audio API
          </strong>{" "}
          as a dual-deck DJ interface with independent playback controls, queue
          management, and intelligent song transitions. Each deck features a
          custom waveform visualizer with scrubbing capability and a real-time
          frequency analyzer that displays{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            FFT
          </strong>{" "}
          data when audio is playing. The crossfader uses{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            gain node
          </strong>{" "}
          routing to blend between decks, creating an authentic DJ mixing
          experience.
        </p>
        <p>
          This project presented unique challenges: maintaining ultra-high
          visual quality in a web environment, orchestrating complex audio
          routing with multiple gain nodes and analysers, and building
          responsive canvas-based visualizations. The result is a performant,
          immersive experience that pushes the boundaries of what&apos;s
          possible with web audio and creative video optimization techniques.
        </p>
        <p className="text-center font-bold text-red-400">
          This project will be live soon and I will update the URL.
        </p>{" "}
      </div>
    ),
  },
  {
    id: 5,
    href: "https://www.dreamworks.com/",
    title: "DreamWorks Animation",
    description:
      "International website for the popular children's tv show Gabby's Dollhouse.",
    thumbnail: dreamworks,
    images: [
      reel("/videos/dreamworks-reel-compressed.mp4"),
      robotabout,
      robouthome,
    ],
    stack: ["Vue.js", "SCSS", "PHP", "MySQL"],
    client: "DreamWorks",
    clientBlurb: "Built with PXL Agency for",
    slug: "dreamworks",
    content: (
      <div>
        <p>
          While working at PXL Agency, I was responsible for regularly updating,
          enhancing and maintaining DreamWorks Animation&apos;s international
          website.
        </p>
        <p>
          Working with our designer, Orlando, we would build out the pages when
          a new movie would come out. We built out pages such as: The Wild
          Robot, Kung Fu Panda, How to Train Your Dragon, Gabby&apos;s
          Dollhouse, Bad Guys, and more. I would update other pages to keep
          content, dates, and assets up to date. To do this we mainly used{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            HTML
          </strong>
          ,{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            SCSS
          </strong>
          ,{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            PHP
          </strong>
          , and good ol fashioned HTML.
        </p>{" "}
      </div>
    ),
  },
  {
    id: 6,
    href: "https://chapter-gen.vercel.app/",
    title: "ChapGen",
    description:
      "A YouTube multitool that helps optimize your channel for growth through AI generated chapters, keywords, titles, analytics and other content.",
    thumbnail: chapgenhome,
    images: [chapgenDash, chapGenGen],
    stack: [
      "Nextjs",
      "React",
      "Tailwindcss",
      "Framer Motion",
      "AI",
      "Recharts",
    ],
    client: "PXL Agency",
    clientBlurb: "Made for and with the wonderful team at",
    slug: "chapgen",
    content: (
      <div>
        <p>
          Originally started as an experiment to explore the implementation of{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            AI
          </strong>{" "}
          tools for targeted use cases, the goal was to develop a solution that
          enhances video discoverability. It utilizes a combination of{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            AI
          </strong>
          and{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            machine learning
          </strong>{" "}
          to analyze the video&apos;s transcript, along with data from the{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            YouTube API
          </strong>
          , to create optimized content tailored to the user&apos;s needs.{" "}
        </p>
        <p>
          One unique feature is the ability for users to customize the chapter
          generation prompt, allowing them to adjust and refine the output. This
          flexibility enables ongoing feedback, making the tool adaptable and
          continuously improving based on user input. Another key feature is
          that the user can click on the generated chapters to jump to that part
          of the video. This is a great way to help users navigate through the
          content and confirm that the generated chapters are accurate.{" "}
        </p>
        <p>
          Building this tool has been a rewarding experience. It&apos;s exciting
          to see how it empowers creators to grow their channels while learning
          more about integrating AI into workflow automation. I&apos;ve gained
          valuable insights into the power of these models, particularly around
          fine-tuning them for even more accurate content generation. A new
          feature that has been implemented is an anlytics dashboard. This
          dashboard allows the users to get data from any time period they
          select and they are able to generate a comparison trendline against
          this period from the same time the previous year, the same period
          selected but just right before, or since the optimization began. There
          are several plans for future features and enhancements to make the
          tool even more impactful.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    id: 7,
    href: "https://www.pxlagency.com/",
    title: "PXL Agency",
    description:
      "Regularly updated, enhanced and maintained our agency website while working at PXL.",
    thumbnail: pxlagencyHome,
    images: [
      reel("/videos/pxlagency-reel-compressed.mp4"),
      pxlagencyvideo,
      pxlcontact,
    ],
    stack: ["Javascript", "Ember.js", "SCSS", "GSAP"],
    client: "PXL Agency",
    clientBlurb: "Made for and with the wonderful team at",
    slug: "pxlagency",
    content: (
      <div>
        <p>
          While working at PXL Agency, I was responsible for regularly updating,
          enhancing and maintaining our agency website. This included adding new
          features, fixing bugs, and ensuring the website was up to date with
          the latest industry trends. This included rebuilding the homepage
          introducing the{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            GSAP
          </strong>
          -based scrolltrigger image carousel. This effect makes it look as if
          the page has stopped scrolling vertically and is instead scrolling
          horizontally through the images.
        </p>
        <p>
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Ember.js
          </strong>{" "}
          was used to build the website, and{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            SCSS
          </strong>{" "}
          was used for styling. Everything was built from scratch and I was
          responsible for the entire development process. I would work with our
          wonderful designer and the rest of the team to scope out new features
          and enhancements to the website. We had a smooth workflow which
          allowed for quick iterations and deployments from staging to
          production.
        </p>{" "}
      </div>
    ),
  },
  {
    id: 8,
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "LookBook",
    description:
      "An interactive 3D photo book that uses advanced animations and custom designs to celebrate my friends' wedding.",
    thumbnail: sjHome,
    images: [sjPageOne, sjPageLast],
    stack: [
      "React",
      "React Three Fiber",
      "Three.js",
      "Tailwindcss",
      "Framer Motion",
    ],
    client: "Some Buddies",
    clientBlurb: "Made with love for",
    slug: "lookbook",
    content: (
      <div>
        <p>
          LookBook is a custom-built 3D digital book created to celebrate my
          friends&apos; wedding by showcasing their photos in an immersive,
          interactive experience. This project combines meaningful design with
          technical complexity to create a unique way of sharing memories.
        </p>
        <p>
          The project is built with{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            React Three Fiber
          </strong>{" "}
          for rendering the 3D scene and{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Three.js
          </strong>{" "}
          for advanced geometry manipulation. I used the{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Wigglebones
          </strong>{" "}
          library to integrate a skeleton system into the page meshes, enabling
          smooth bending animations as the pages turn. Each page mesh is skinned
          with bones, and vertex weights are calculated dynamically to ensure
          natural deformation during animations.
        </p>
        <p>
          Textures are applied using{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            alpha maps
          </strong>{" "}
          for detailed, glossy reflections, adding realism to the front and back
          covers. The project also employs custom shaders and materials for the
          pages, combining image textures with emissive highlights to enhance
          interactivity and visual appeal.
        </p>
        <p>
          To ensure performance and scalability, I preloaded textures for all
          pages and optimized the geometry by reusing a single mesh structure
          for the entire book. Animations, like page-turning, are controlled
          with dynamic state updates and easing functions, providing a smooth
          user experience.
        </p>
        <p>
          Due to the personal nature of the photos, the project is not publicly
          available. However, I&apos;d be happy to share a private link—just
          shoot me a message!
        </p>
      </div>
    ),
  },
  {
    id: 9,
    href: "https://dj-one.vercel.app/",
    title: "DJ Invite",
    description: "A fun custom party invite I made for a friends' DJ event",
    thumbnail: djHome,
    images: [reel("/videos/dj-controls-compressed.mp4"), djModal, djCode],
    stack: [
      "Nextjs",
      "React",
      "Tailwindcss",
      "Framer Motion",
      "React Three Fiber",
    ],
    client: "Friend",
    clientBlurb: "Built for a ",
    slug: "djinvite",
    content: (
      <div>
        <p>
          One weekend, I decided to challenge myself with a fun project—creating
          a custom 3D invitation for a friend&apos;s upcoming DJ event. Inspired
          by the playful invitations on Partiful, I wanted to capture that same
          energy but with a twist: incorporating 3D elements.{" "}
        </p>
        <p>
          The first step was finding a 3D model of a turntable because,
          let&apos;s be honest, modeling one myself would&apos;ve taken ages! I
          found a free one, converted it from{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            GLTF
          </strong>{" "}
          to a{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            React Three Fiber
          </strong>{" "}
          component, and hit the ground running.{" "}
        </p>
        <p>
          The goal was simple: give people a cool spot to RSVP. I built a modal
          that connected to an email service so I&apos;d get notified when
          someone RSVP&apos;d. With the core functionality in place, it was time
          to crank up the vibe. I added a{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            custom shader
          </strong>{" "}
          for the background, wrapping the scene in a giant sphere with a neon,
          color-changing atmosphere, and threw in some camera controls tied to
          mouse movement for a bit of interactivity.{" "}
        </p>
        <p>
          Of course, a 3D turntable wouldn&apos;t be complete without music, so
          I rigged it to play a track from{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            YouTube
          </strong>{" "}
          when the play button was pressed.{" "}
        </p>
        <p>
          While I ran out of time before the event to add everything I
          envisioned, I was proud of the result and learned a ton in the
          process. Next time, I&apos;ll definitely spend more time optimizing
          the model to improve performance—but hey, that&apos;s what projects
          like this are all about!{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    id: 10,
    href: "https://www.gabbysdollhouse.com/",
    title: "Gabby's Dollhouse",
    description:
      "International website for the popular children's tv show Gabby's Dollhouse.",
    thumbnail: gabbysDollhouseHome,
    images: [gabbysDollhouseFPage, gabbysDollhouseCharacter],
    stack: ["Vue.js", "Nuxt", "SCSS", "PHP", "MySQL"],
    client: "Dreamworks",
    clientBlurb: "Built with PXL Agency for",
    slug: "gabbysdollhouse",
    content: (
      <div>
        <p>
          As the lead on the frontend development team, I was responsible for
          building the international website for the popular children&apos;s
          show Gabby&apos;s Dollhouse. The site was developed using{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Vue.js
          </strong>{" "}
          for the frontend, integrated with a{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            PHP
          </strong>
          -based CMS on the backend to dynamically serve content. The vibrant
          and playful design of the site made the build especially
          enjoyable.{" "}
        </p>
        <p>
          I worked closely with design to build out each of the components that
          we used for every page of the website. We developed the component
          library to allow the client to have full control in the custom CMS
          over how they chose to display the content on the page as they updated
          the content in the future. This website was super fun and playful to
          work on. From the little kittens that move in the navbar to the
          bubbles in the background of the pages, it was a joy to work on.
        </p>
        <p>
          The website was designed to be fully responsive and optimized to
          handle high traffic volumes. Performance optimization and intuitive
          navigation were key priorities, ensuring a seamless experience for
          users. Additionally, as an international site, we implemented
          multilingual support, allowing content to be automatically translated
          based on the user&apos;s language preferences.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    id: 11,
    href: "https://oravai-app.vercel.app/",
    title: "Oravai",
    description:
      "Open-source tool to help medical professionals track and prepare preference cards for the operating room.",
    thumbnail: oravaiHome,
    images: [oravaiDocMobile, oravaiDocCard],
    stack: [
      "Nextjs",
      "React",
      "Tailwindcss",
      "Framer Motion",
      "Drizzle ORM",
      "MySQL",
    ],
    client: "Vail Health",
    clientBlurb: "Built for",
    slug: "oravai",
    content: (
      <div>
        <p>
          Oravai is an open-source tool designed to help medical professionals
          efficiently track and manage preference cards for the operating room.
          In the fast-paced, high-pressure environment of an OR, having a
          centralized system to store crucial information for each doctor,
          surgical team, and procedure is essential for maintaining organization
          and ensuring smooth operations. Unfortunately, many existing tools are
          outdated and not user-friendly, which inspired me to create this
          modern solution.{" "}
        </p>
        <p>
          Built with{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Next.js
          </strong>
          ,{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Tailwind CSS
          </strong>
          ,{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Framer Motion
          </strong>
          ,{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Drizzle ORM
          </strong>
          , and{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            MySQL
          </strong>
          , Oravai is engineered to be both performant and easy to use.
          I&apos;ve been working closely with medical professionals to ensure
          that the tool aligns with their real-world needs, prioritizing
          usability and functionality. A rewarding part of this process has been
          designing the user experience from the perspective of someone using it
          in high-stress situations, where quick access to the right information
          is critical. Striking a balance between intuitive design and seamless
          UX has been key to making Oravai a tool that staff will want to use
          under pressure.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    id: 12,
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
          This internal tool is designed to streamline the thumbnail creation
          process for our YouTube optimization team, allowing for faster and
          more efficient production. It leverages specific templates based on
          the client&apos;s segment, enabling users to pull in images directly
          from YouTube or upload them from their computer.{" "}
        </p>
        <p>
          Using a combination of{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Sharp
          </strong>{" "}
          and{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Canvas
          </strong>
          , users can overlay PNG assets and customize various features of the
          thumbnail according to the segment&apos;s configuration needs. Once
          finalized, the thumbnail can be uploaded directly to the YouTube
          channel.
        </p>
        <p>
          Built with{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Next.js
          </strong>
          ,{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Sharp
          </strong>
          ,{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Tailwind
          </strong>
          , and{" "}
          <strong className="dark:text-white text-neutral-900 font-semibold">
            Framer Motion
          </strong>
          , this tool offers flexibility and responsiveness. Future plans
          include integrating AI-driven features to suggest thumbnails or
          generate additional content to further enhance the tool&apos;s
          capabilities.
        </p>{" "}
      </div>
    ),
  },
];
