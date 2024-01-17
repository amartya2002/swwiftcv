"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import { ResumeForm } from "../components/ResumeForm";
import { Resume } from "../components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="w-full overflow-hiddeni bg-zinc-50">
        {/* <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-3">
            <Resume />
          </div>
        </div> */}
        <div className="p-2 ">
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
