// page.js
import React from "react";
import RootLayout from "./layout";
import ContactForm from "./components/ContactForm";

export default function Home() {

  return (
    <RootLayout>
      <h1 className="font-bold text-center sm:text-3xl md:text-2xl lg:text-3xl xl:text-3xl my-5">
        Contact
      </h1>
      <ContactForm />
    </RootLayout>
  );
}
