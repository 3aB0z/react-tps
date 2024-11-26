import { useState } from "react";
import Expert from "./Expert";

export default function Experts2() {
  const [experts, setExperts] = useState([]);
  fetch("./data1.json")
    .then((data) => data.json())
    .then((expertsData) => setExperts(expertsData));
  return (
    <div>
      {experts.map((item) => {
        return <Expert key={item.id} expert={item}></Expert>;
      })}
    </div>
  );
}
