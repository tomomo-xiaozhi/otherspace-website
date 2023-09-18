import React from "react";
import Image from "next/image";

const advantages = [
  { advantage: "Sensoji" },
  { advantage: "Skytree" },
  { advantage: "Ginza" },
  { advantage: "Ueno" },
  { advantage: "Shibuya" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Us
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Good Access to</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {advantages.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.advantage}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            {/* <p>
              Hi, my name is Hosna and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Los Angeles, CA.
            </p>
            <br /> */}
            <p>
              &quot;OTHER SPACE&quot; is a next-level accommodation facility
              that offers a unique hotel experience{" "}
              <span className="font-bold text-teal-500">
                tailored to your individual needs
              </span>{" "}
              . We introduce a novel way of staying and allow you to customize
              your space to match your style.
            </p>
            <br />
            <p>
              At &quot;OTHER SPACE&quot; we not only offer a comfortable lodging
              experience but also ample opportunities to engage with local
              culture and activities. You can explore the surrounding areas and
              indulge in new experiences.
            </p>
            <br />
            <p></p>
            {/* {" "}<span className="font-bold text-teal-500">never stop growing</span>{" "} */}
            {/* <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
