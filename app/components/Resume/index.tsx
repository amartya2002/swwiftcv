"use client";

import { useAppSelector } from "@/app/lib/redux/hooks";
import { selectResume } from "@/app/lib/redux/resumeSlice";
import { selectSettings } from "@/app/lib/redux/settingsSlice";
import { useMemo, useState } from "react";
import { FlexboxSpacer } from "../FlexboxSpacer";
import { ResumeIFrameCSR } from "./ResumeIFrame";
import { ResumePDFProfile } from "./ResumePDF/ResumePDFProfile";
import { ResumePDF } from "./ResumePDF";
import {
  useRegisterReactPDFFont,
  useRegisterReactPDFHypenationCallback,
} from "../fonts/hooks";
import { ResumeControlBarCSR } from "./ResumeControlBar";

export const Resume = () => {
  const [scale, setScale] = useState(1);
  const resume = useAppSelector(selectResume);
  const settings = useAppSelector(selectSettings);
  const document = useMemo(
    () => <ResumePDF resume={resume} settings={settings} isPDF={true} />,
    [resume, settings]
  );

  useRegisterReactPDFFont();
  useRegisterReactPDFHypenationCallback(settings.fontFamily);

  return (
    <>
      <div className="">
        {/* <FlexboxSpacer maxWidth={50} className="hidden md:block" /> */}
        <div className="">
        <ResumeControlBarCSR
            scale={scale}
            setScale={setScale}
            documentSize={settings.documentSize}
            document={document}
            fileName={resume.profile.name + " - Resume"}
          />
          <section className="  rounded-xl ">
            <ResumeIFrameCSR
              documentSize={settings.documentSize}
              scale={scale}
              enablePDFViewer={false}
            >
              <ResumePDF resume={resume} settings={settings} isPDF={false} />
            </ResumeIFrameCSR>
          </section>

        </div>
      </div>
    </>
  );
};
