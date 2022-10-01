import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, customMeta }) {
  const router = useRouter();
  const meta = {
    title: "The Wedding App",
    description: "Chaparrito's wedding App",
    image: "",
    type: "webapp",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <link rel="shortcut icon" href="/icon.png" />
      </Head>
      <main className="w-full h-full  bg-pink-back ">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </main>
    </div>
  );
}
