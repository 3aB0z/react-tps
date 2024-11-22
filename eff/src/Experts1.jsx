import expertsData from "./data";
import Expert from "./Expert";

export default function Experts1() {
  return (
    <div>
      {expertsData.map((item) => {
        return <Expert key={item.id} expert={item}></Expert>;
      })}
    </div>
  );
}
