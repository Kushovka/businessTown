import React from "react";
import Property from "../components/properties/Property";
import PropertySearch from "../components/properties/PropertySearch";
import Discover from "../components/properties/Discover";
import ContactForm from "../components/properties/ContactForm";
import CTA from "../components/properties/CTA";

const Properties = () => {
  return ( 
    <main>
      <Property />
      <PropertySearch />
      <Discover />
      <ContactForm />
      <CTA />
    </main>
  );
};

export default Properties;
