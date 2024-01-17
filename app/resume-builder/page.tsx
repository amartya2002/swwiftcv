"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import { ResumeForm } from "../components/ResumeForm";
import { Resume } from "../components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-zinc-50  ">
        <div className="hidden md:grid  md:grid-cols-7 p-6 gap-3 ">
          <div className="col-span-4">
            <div className="h-screeni overflow-scrll">

            <ResumeForm />
            </div>
          </div>
          <div className="col-span-3 ">
            <Resume />
          </div>
        </div>

        <div className="p-2 md:px-6 md:hidden ">
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid  mx-auto w-[80%] md:w-[30%] grid-cols-2">
              <TabsTrigger value="account">Edit</TabsTrigger>
              <TabsTrigger value="password">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              {" "}
              <div>
                <ResumeForm />
              </div>
            </TabsContent>
            <TabsContent value="password">
              {" "}
              <Resume />
            </TabsContent>
          </Tabs>
        </div>
        
      </main>
    </Provider>
  );
}
