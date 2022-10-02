import Head from "next/head";
import Image from "next/image";
import Collage from "../components/Collage";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import MissingDays from "../components/MissingDays";
import Thnks from "../components/Thnks";
import Title from "../components/UI/Title";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <ContainerBlock title="R & R">
      <Title title="Save the date!" />
      <MissingDays />
      <Hero />
      <Thnks />
    </ContainerBlock>
  );
}
