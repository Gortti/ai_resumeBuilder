import React, { useState } from "react";
import PersonalDetails from "./forms/PersonalDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import Education from "./forms/Education";

function FormSection() {
  const [activeFormIndex, setActiveFormIndex] = useState(1);

  const [enableNext, setEnableNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          {" "}
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft /> Back
            </Button>
          )}
          <Button
            classname="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            disabled={!enableNext}
          >
            Next <ArrowRight />{" "}
          </Button>
        </div>
      </div>
      {/* Personal Detail */}
      {activeFormIndex === 1 ? (
        <PersonalDetails enableNext={(v) => setEnableNext(v)} />
      ) : null}
      {/* Summery */}
      {activeFormIndex === 2 ? <Summery enableNext={(v) => setEnableNext(v)}/> : null}
      {/* Experience */}
      {activeFormIndex === 3 ? <Experience enableNext={(v) => setEnableNext(v)}/> : null}

      {/* Education Details */}
      {activeFormIndex === 4 ? <Education enableNext={(v) => setEnableNext(v)}/> : null}

      {/* Skills */}
    </div>
  );
}

export default FormSection;
