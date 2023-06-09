import Image from "next/image";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import Advertise from "../app/components/Advertise";

export default function Home() {
  return (
    <>
      <Navbar />
      <Advertise />
      <Footer />
    </>
  );
}
