import GradientGenerator from "@subComponents/Generators/GradientGenerator";
import './CSSGenerators.css';


export default function CSSGenerators(){



  return (
    <div>
      <h1 className="text-4xl text-center py-3">Free CSS Generators</h1>

      <div className="container">
        <GradientGenerator />
      </div>
      </div>
  )
}