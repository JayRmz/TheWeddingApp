import Head from "next/head";
import Image from "next/image";
import Collage from "../components/Collage";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import MissingDays from "../components/MissingDays";
import Thnks from "../components/Thnks";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <ContainerBlock title="The Wedding App">
      <p className="text-8xl text-center font-serif">Save the date!</p>
      <MissingDays />
      <Hero />
      <Thnks />
    </ContainerBlock>
  );
}
