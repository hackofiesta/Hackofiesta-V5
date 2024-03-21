"use client";
import WebsiteLoadUp from "@/components/molecules/home/WebsiteloadUp";
import Navbar from "@/components/molecules/common/Navbar";
import HeroSection from "@/components/molecules/home/HeroSection";
import React, { useEffect, useState } from "react";
import TextSplitEffect from "@/components/molecules/home/TextSplitEffect";
import Stats from "@/components/molecules/home/Stats";
import Accordian from "@/components/molecules/accordian/Accordian";
import Footerr from "@/components/molecules/common/Footer";
import Sponsors from "@/components/molecules/sponsors/Sponsors";
import NewSponsors from "@/components/molecules/sponsors/NewSponsors";
import RequestToJoin from "@/components/molecules/home/RequestToJoin";
import Team from "@/components/molecules/home/Team";
import { Features, FeaturesProps, ThemeProvider } from "@lobehub/ui";
import Prizes from "@/components/molecules/prize-section/Prizes";
import WantToSponsor from "@/components/molecules/sponsors/WantToSponsor";
import Timeline from "@/components/molecules/home/Timeline";

const Home = () => {
  const [val, setVal] = useState(false);
  useEffect(() => {
    const loadUp = document.getElementById("loadUp");
    if (sessionStorage.getItem("viewed")) {
      setVal(true);
    } else {
      setTimeout(() => {
        loadUp.style.opacity = 0;
        setTimeout(() => {
          document.body.style.overflowY = "scroll";
        }, 1000);
        setTimeout(() => {
          setVal(true);
          sessionStorage.setItem("viewed", "true");
        }, 700);
      }, 4750);
    }
  }, []);
  return (
    <div>
      {!val && <WebsiteLoadUp />}
      {val && (
        <>
          <Navbar />
          <HeroSection/>
          <TextSplitEffect/>
          <RequestToJoin/>
          <Prizes/>
          <Stats/>
          <NewSponsors/>
          <Sponsors/>
          <Team/>
          <Accordian/>
          <WantToSponsor/>
          <Footerr />
        </>
      )}
    </div>
  );
};

export default Home;
