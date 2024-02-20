import React from "react";
import Params from "./Params";

function Tab() {
  return (
    <div className="mt-2 text-black w-[300px]">
      <div role="tablist" className="tabs  w-full tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-[#000]"
          aria-label="Params"
        />
        <div role="tabpanel" className="tab-content ">
          <Params />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-[#000]"
          aria-label="Headers"
          checked
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab text-[#000]"
          aria-label="Body"
        />
        <div role="tabpanel" className="tab-content p-10">
          Tab content 3
        </div>
      </div>
    </div>
  );
}

export default Tab;
