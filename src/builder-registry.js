import { Builder } from "@builder.io/react";
import EmpowerHerKit from "./Components/Pages/Home-Page";
import Header from "./Components/EmpowerHerKit/Header";
import Navigation from "./Components/EmpowerHerKit/Navigation";

Builder.registerComponent(EmpowerHerKit, {
  name: "EmpowerHerKit",
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(Navigation, {
  name: "Navigation",
});
