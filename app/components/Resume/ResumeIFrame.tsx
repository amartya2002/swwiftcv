import {
  A4_HEIGHT_PX,
  A4_WIDTH_PT,
  A4_WIDTH_PX,
  LETTER_HEIGHT_PX,
  LETTER_WIDTH_PT,
  LETTER_WIDTH_PX,
} from "@/app/lib/constants";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Frame from "react-frame-component";

const getIFrameInitialContent = (isA4: boolean) => {
  const width = isA4 ? A4_WIDTH_PT : LETTER_WIDTH_PT;

  return `<!DOCTYPE html>
    <html>
        <head>
            <style>
            </style>
        </head>
        <body style='overlfow: hidden; width: ${width}pt; margin:0;padding:0; -webkit-text-size-adjust:none;'>
            <div></div>
        </body>
    <html>`;
};

const ResumeIFrame = ({
  documentSize,
  scale,
  children,
  enablePDFViewer,
}: {
  documentSize: string;
  scale: number;
  children: React.ReactNode;
  enablePDFViewer?: boolean;
}) => {
  const isA4 = documentSize === "A4";
  const iframeInitialContent = useMemo(
    () => getIFrameInitialContent(isA4),
    [isA4]
  );

  if (enablePDFViewer) {
    return <></>;
  }

  const width = isA4 ? A4_WIDTH_PX : LETTER_WIDTH_PX;
  const height = isA4 ? A4_HEIGHT_PX : LETTER_HEIGHT_PX;

  return (
    <div className="border md:flex mod:justify-center p-6  gradient-to-r bg-gradient-to-l from-red-100 to-stone-100 overflow-auto rounded-xl  h-[32rem]">
      <div className="">
      <div
        className="rounded-2xl  "
        style={{
          maxWidth: `${width * scale}px`,
          maxHeight: `${height * scale}px`,
        }}
      >
        <div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(${scale})`,
          }}
          className={`origin-top-left bg-white rounded-2xl `}
        >
          <Frame
            className="rounded-2xl "
            initialContent={iframeInitialContent}
            style={{ width: "100%", height: "100%" }}
            key={isA4 ? "A4" : "LETTER"}
          >
            {children}
          </Frame>
        </div>
      </div>
      </div>

    </div>
  );
};

export const ResumeIFrameCSR = dynamic(() => Promise.resolve(ResumeIFrame), {
  ssr: false,
});
