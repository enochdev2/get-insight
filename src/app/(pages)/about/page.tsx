import WhatsNew from "@/components/WhatsNew";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Dev-Noch",
  description: "about Dev-Noch",
};

const About = () => {
  return (
    <section className="w-full min-h-screen overflow-hidden py-12 ">
      <div className="lg:mx-20 mt-12 md:mx-14 mx-5 text-justify">
        <div className=" relative max-w-[100%] mb-10 lg:h-96 h-[430px]">
          <Image src="/banner.png" alt="Real-Insight" fill />
        </div>

        <div className="z-10 md:w-2/3 w-[90%] bg-slate-300 absolute translate-x-[-50%] md:translate-x-[-50%] translate-y-[0%] md:translate-y-[10%] left-[50%] bg-transparent top-48 font-semibold m-auto text-center py-8 px-2 dark:text-black">
          <h1 className="font-bold md:text-2xl text-lg lg:text-3xl my-2 bg-gradient-to-r from-cyan-600 via-green-600 to-teal-500 text-bold text-transparent bg-clip-text">
            Welcome to Dev-Noch Blog,
          </h1>
          <h4 className="md:text-2xl bg-black/40 rounded-lg py-3 px-4 text-white text-lg font-sans w-9/12 m-auto ">
            Your ultimate destination for insightful and enriching content.
            Here, we embark on a journey through the realms of business,
            finance, Web3, and technology, offering you a treasure trove of
            knowledge and wisdom.
          </h4>
        </div>

        <h1 className="underline font-bold text-xl mb-4 dark:text-white text-center">
          About Dev-Noch Blog
        </h1>
        <p className="text-lg font-medium text-start md:text-justify my-4 max-w-6xl mx-auto">
          Welcome to Dev-Noch Blog, where we explore the intersections of
          business, finance, Web3, and technology to provide insightful articles
          and resources for our readers. Here, we embark on a journey through
          the realms of business, finance, Web3, and technology, offering you a
          treasure trove of knowledge and wisdom.
        </p>

        <h1 className="underline font-bold text-xl dark:text-white text-center">
          Our Mission At Dev-Noch Blog
        </h1>
        <p className="text-lg font-medium my-4 md:text-justify text-start max-w-6xl mx-auto">
          our mission is to empower individuals and businesses alike with
          knowledge and expertise in the realms of business strategies,
          financial management, familial dynamics, and technological
          advancements. We strive to deliver high-quality content that educates,
          inspires, and engages our audience.
        </p>
      </div>

      <section className="md:max-w-[90%] max-w-[95%] md:px-8 bg-custom-image bg-cover m-auto bg-center dark:bg-black/30 rounded-lg my-4 px-3">
        <WhatsNew />
      </section>

      <div className="lg:mx-20 mt-12 md:mx-14 mx-5 text-justify">
        <h1 className="underline font-bold text-xl dark:text-white text-center">
          What We Cover
        </h1>
        <ul className="text-lg font-medium my-4 max-w-6xl mx-auto space-y-2 md:text-justify text-start">
          <li>
            <span className="font-extrabold mr-3"> BUSINESS:</span>
            Explore cutting-edge business trends, entrepreneurial insights, and
            strategies for success in today&lsquo;s competitive landscape.
          </li>
          <li>
            <span className="font-extrabold mr-3"> FINANCE:</span>
            Gain valuable tips and advice on personal finance, investment
            opportunities, and navigating the complexities of the financial
            world.
          </li>
          <li>
            <span className="font-extrabold mr-3"> Web3:</span>
            Discover tips for strengthening Web3 bonds, managing work-life
            balance, and fostering healthy relationships within your Web3 unit.{" "}
          </li>
          <li>
            <span className="font-extrabold mr-3"> Technology:</span>
            Stay updated on the latest technological innovations, digital
            transformations, and how they impact both businesses and
            individuals.
          </li>
        </ul>

        <div className=" relative md:max-w-[60%] max-w-[80%] mx-auto mb-10 lg:h-96 h-[250px]">
          <Image src="/insightpeoples.jpg" alt="Real-Insight" fill />
        </div>
        {/* <h1 className="underline font-bold text-xl dark:text-white text-center">
          Meet the Team
          </h1>
          [Include a brief introduction about yourself and any contributors or
          team members involved in creating content for the blog. Highlight
          relevant expertise, experiences, and passions related to the topics
          covered on the blog.] */}
        <h1 className="underline font-bold text-xl dark:text-white text-center">
          Our Values
        </h1>
        <p className="text-lg font-medium md:text-justify text-start my-4 max-w-6xl mx-auto space-y-2">
          <br />
          Quality: We are committed to delivering well-researched, accurate, and
          insightful content to our readers.
          <br />
          Integrity: We prioritize transparency, honesty, and ethical standards
          in all aspects of our content creation and interactions with our
          audience. - <br />
          Community: We value our readers and strive to foster a supportive and
          engaged community where ideas can be shared, discussions can flourish,
          and connections can be made.
          <br />
          {/* Connect With Us [Provide links to your social media profiles, email
        newsletter sign-up, and any other channels through which readers can
        connect with you.] #### Get Involved [Encourage readers to engage with
        your content by leaving comments, sharing articles with their networks,
        and reaching out with feedback or topic suggestions.] */}
          <br />
        </p>
        <p className="text-lg font-medium my-4 max-w-6xl mx-auto">
          Thank you for visiting Dev-Noch Blog. We hope you find our content
          valuable and look forward to journeying with you as we explore the
          fascinating worlds of business, finance, Web3, and technology
          together.
        </p>
      </div>
    </section>
  );
};

export default About;
