import Hero from "../components/Hero";
import MainSections from "../components/MainSections";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="main-sections">
        <MainSections />
      </div>
    </div>
  );
}