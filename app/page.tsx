import Navbar from "@/components/landing/Navbar";
import AchievementContainer from "@/components/landing/achievements/AchievementContainer";
import HeroContainer from "@/components/landing/hero/HeroContainer";
import OverviewContainer from "@/components/landing/overview/OverviewContainer";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
      <div className="w-full">
        <Navbar />
        <HeroContainer />
        <AchievementContainer />
        <OverviewContainer />
      </div>
    </div>
    </>
  );
}
