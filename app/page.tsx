import Divider from "@/components/Divider";
import Features from "@/components/Features";
import Greeting from "@/components/Greeting";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Action from "@/components/Action";

export default function Home() {
  return (
    <>
      <Hero />
      <Greeting />
      <Banner />
      {/* <Divider /> */}
      <Features />
      <Action />
    </>
  );
}
