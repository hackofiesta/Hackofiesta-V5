import React from "react";
import { Features, FeaturesProps, ThemeProvider } from "@lobehub/ui";
import { MoonStar, Palette, Zap } from "lucide-react";
import { myFont } from "../common/AnimatedTitle";
import BgGradient from "@/components/atoms/gradientBackground";


const Stats = () => {
  console.log(Features);
  return (
    // <ThemeProvider themeMode="dark">
      <div>
      <div
        className={`md:text-8xl ${myFont.className} sm:text-6xl text-5xl text-center md:pt-32`}
      >
        DOMAINS
      </div>
      <div className="w-screen flex justify-center items-start p-6 md:pb-40">
        <Features
          items={[
            {
              description:
                "Develop innovative solutions that address environmental challenges and promote a greener future.",
              icon: Zap,
              title: "SUSTAINABILITY",

            },
            {
              description:
                "Create impactful and scalable solutions that address social issues, fostering positive change and community well-being.",
              icon: Zap,
              title: "SOCIAL GOOD",
            },
            {
              description:
                "Leverage Generative AI and Machine Learning to develop apps that enhance automation, analysis, and decision-making.",
              icon: Zap,
              title: "AI/ML",
            },
            {
              description:
                " Dive into the world of smart contracts, DeFi protocols and the decentralized web. Build the next frontier of the internet.",
              icon: Zap,
              title: "BLOCKCHAIN & WEB3",
            },
            {
              description:
                "Tackle real-world business challenges and develop innovative solutions that can be scaled into full-fledged startups.",
              icon: Zap,
              title: "BUSINESS INNOVATION",
            },
            {
              description:
                "This track welcomes diverse and boundary-pushing ideas, using emerging technologies ",
              icon: Zap,
              title: "OPEN",
            },
          ]}
          // itemStyle={{ width:"500px",height:"500px" }}
        />
      </div>
      </div>
    // </ThemeProvider>
  );
};

export default Stats;
