import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Signup from "@/components/Signup/Signup";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      Home Page
    </>
  );
}
