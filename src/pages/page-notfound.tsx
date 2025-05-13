

import FuzzyText from "@/components/FuzzyText";


export default function Notfound() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black m-0 p-0">
      <FuzzyText 
  baseIntensity={0.2} 
  hoverIntensity={0.5} 
  enableHover={true}
>
  404 Oops!
</FuzzyText>
    </div>
  );
}
