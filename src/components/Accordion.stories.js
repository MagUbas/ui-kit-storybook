import React from "react";
import Accordion from "./Accordion";

export default {
  component: Accordion,
  title: "Components/Accordion",
};

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Accordion title",
  content:
    "Grunion, brook lamprey loweye catfish rocket danio jewfish?" +
    " Electric ray mouthbrooder, haddock treefish garpike, ribbon sawtail" +
    " fish ling cod, combtooth blenny, salmon Atlantic herring longnose dace yellow perch Atlantic eel?",
};
