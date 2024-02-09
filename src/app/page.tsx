import { FadeInSection } from "@/components/FadeInText";
import OurMenu from "@/components/OurMenu";
import ReservationForm from "@/components/ReservationForm";
import LandingSection from "@/components/landingSection";
import LandingSection2 from "@/components/landingSection2";
import LandingSection3 from "@/components/landingSection3";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen ">
      <LandingSection />
      <LandingSection2 />
      <FadeInSection>
        <LandingSection3 />
      </FadeInSection>
      <FadeInSection>
        <OurMenu />
      </FadeInSection>
      <FadeInSection>
        <ReservationForm />
      </FadeInSection>
      {/* <RestaurantBlog/> */}
    </div>
  );
}
