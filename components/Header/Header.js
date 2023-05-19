import React from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
const Header = () => {
  const router = useRouter();
  const redirectLogin = () => {
    router.push("/login");
  };
  return (
    <>
      <header>
        <nav className="sticky flex justify-between items-center bg-gray-100 shadow-md px-12 py-8">
          <div>
            <Image
              src={"https://appwrite.io/images/appwrite.svg"}
              height={50}
              width={150}
              alt="appwrite logo"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="px-4 py-2 hover:bg-black hover:text-white rounded-md cursor-pointer">
            <button onClick={redirectLogin}>Auth</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
