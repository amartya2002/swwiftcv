"use client";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import { ResumeForm } from "../components/ResumeForm";
import { Resume } from "../components/Resume";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="w-full overflow-hidden bg-zinc-100">
        {/* <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-3">
            <Resume />
          </div>
        </div> */}

<ResumeForm/>
<Resume/>

      </main>
    </Provider>
  );
}
