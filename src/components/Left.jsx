import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequire } from "../redux/Require";

function Left() {
  const data = useSelector((state) => state.Require.requirs);
  const nameInp = useSelector((state) => state.Require.nameInp);

  const dispatch = useDispatch();
  const hanleClick = () => {
    const payload = {
      id: Math.random() * 1000000,
      method: "GET",
      text: "New Requist",
      new: true,
    };
    dispatch(addRequire(payload));

    nameInp.focus();
  };
  return (
    <div className="p-4 bg-gray-200 h-full  border-r border-r-stone-400">
      <button
        onClick={hanleClick}
        className="text-3xl  font-bold text-slate-700 mb-6 "
      >
        +
      </button>
      <div id="Requires" className="flex flex-col gap-2 ">
        {data &&
          data.map((d, i) => (
            <div
              className="flex items-center gap-2 p-2 bg-slate-500 rounded-md text-white font-semibold"
              key={d.id}
            >
              <span>{i + 1}</span>
              <span>{d.method}</span>
              <span>{d.text}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Left;
