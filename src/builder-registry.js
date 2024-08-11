import { Builder } from "@builder.io/react";
import EmpowerHerKit from "./Components/Pages/Home-Page";
import Header from "./Components/Utils/Header";

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(EmpowerHerKit, {
  name: "EmpowerHerKit",
});

