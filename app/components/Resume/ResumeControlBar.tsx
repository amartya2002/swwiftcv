"use client";
import { Slider } from "@/components/ui/slider";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon, DocumentArrowDownIcon
} from "@heroicons/react/24/outline";
import {DownloadIcon} from '@radix-ui/react-icons'
import dynamic from "next/dynamic";
import { useSetDefaultScale } from "./hooks";
import { usePDF } from "@react-pdf/renderer";
import { useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";

const ResumeControlBar = ({
  scale,
  setScale,
  documentSize,
  document,
  fileName,
}: {
  scale: number;
  setScale: (scale: number) => void;
  documentSize: string;
  document: JSX.Element;
  fileName: string;
}) => {
  const { scaleOnResize, setScaleOnResize } = useSetDefaultScale({
    setScale,
    documentSize,
  });

  const [instance, update] = usePDF({ document });

  useEffect(() => {
    update(document);
  }, [update, document]);
  return (
    <div className=" my-6 border bg-white rounded-xl p-6 ">
      <div className="flex items-center gap-6 justify-between">
        <div className="items-center flex gap-3 ">
          <Slider
            className="w-36"
            max={1.5}
            min={0.4}
            step={0.01}
            value={[scale]}
            onValueChange={(e) => {
              setScaleOnResize(false);
              setScale(e[0]);
            }}
          />
          <div className="w-10">{`${Math.round(scale * 100)}%`}</div>
        </div>

        <div className="flex gap-2 items-center ">
          <Button
            variant={"outline"}
            onClick={() => setScaleOnResize((prev) => !prev)}
            className="text-xs"
          >
            Reset Scale 
          </Button>

          <a
            className={buttonVariants({ variant: "default" })}
            href={instance.url!}
            download={fileName}
          >
           <DownloadIcon/>
          </a>
        </div>
      </div>
    </div>
  );
};

export const ResumeControlBarCSR = dynamic(
  () => Promise.resolve(ResumeControlBar),
  {
    ssr: false,
  }
);
