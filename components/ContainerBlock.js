import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, title }) {
  const router = useRouter();
  const meta = {
    description: "Chaparrito's wedding App",
    image: "",
    type: "webapp",
    title: title,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link rel="shortcut icon" href="/icon.png" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <main className="w-full h-full  bg-pink-back ">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
