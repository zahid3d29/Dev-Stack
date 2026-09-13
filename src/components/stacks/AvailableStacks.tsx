import type { Istack } from "../../types/stack";
import StackCard from "./StackCard";
import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

const AvailableStacks = ({
  stacks,
  addedStacks,
  setAddedStacks,
}: {
  stacks: Istack[];
  addedStacks: Istack[];
  setAddedStacks: Dispatch<SetStateAction<Istack[]>>;
}) => {
  // console.log(stacks, "AvailableStacks woo");

  const [selectedStacks, setSelectedStacks] = useState(0);

  // handle remove single stack item from the addedStacks array
  const handleRemoveSingleStack = (stackId: Istack["id"]) => {
    setAddedStacks((prevStacks) =>
      prevStacks.filter((stack) => stack.id !== stackId),
    );
    setSelectedStacks((prevCount) => prevCount - 1);
    toast.info("Stack removed from your selection.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleRemoveAllStacks = () => {
    setAddedStacks([]);
    setSelectedStacks(0);
    toast.info("All stacks removed!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-2 mb-16">
        <div className="container mx-auto">
          <div className="headingArea text-left mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold my-4">
              Explore the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Technologies
              </span>
            </h2>
            <p className="text-gray-600">
              Pick one technology per category to build your ideal stack
            </p>
          </div>
          <div className="teckStacks flex flex-col md:flex-row gap-4 justify-between ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stackCard">
              {stacks.map((stack: Istack) => {
                return (
                  <StackCard
                    key={stack.id}
                    stack={stack}
                    selectedStacks={selectedStacks}
                    setSelectedStacks={setSelectedStacks}
                    addedStacks={addedStacks}
                    setAddedStacks={setAddedStacks}
                  />
                );
              })}
            </div>
            <div className="yourStack w-full md:w-[400px]">
              {selectedStacks > 0 ? (
                <>
                  {/* stack with selected stack  */}

                  <div className="availableStack max-w-sm w-full bg-white border border-gray-200 rounded-[2rem] p-6 shadow-sm font-sans">
                    <div className="mb-6">
                      <h2 className="text-[22px] font-bold text-slate-900 tracking-tight">
                        Your Stack
                      </h2>
                      <p className="text-slate-400 text-sm mt-1">
                        {selectedStacks} Technology Selected
                      </p>
                    </div>

                    <div className="flex flex-col gap-3 mb-10">
                      {addedStacks.map((stack: Istack) => {
                        return (
                          <div
                            key={stack.id}
                            className="singleStack flex items-center justify-between border border-gray-200 rounded-xl p-3 bg-white"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                <img
                                  src={stack.icon}
                                  alt={stack.name}
                                  className="w-8 h-8 object-contain"
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-slate-800 font-bold text-sm leading-tight">
                                  {stack.name}
                                </span>
                                <span className="text-slate-400 text-[11px] font-medium mt-0.5">
                                  {stack.category}
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveSingleStack(stack.id)}
                              className="text-slate-400 hover:text-slate-600 p-1 transition-colors"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <button
                      onClick={handleRemoveAllStacks}
                      className="w-full py-2.5 px-4 border border-[#fca5a5] text-[#ef4444] font-semibold text-base rounded-xl hover:bg-red-50 transition-colors"
                    >
                      Remove All
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* empty stack  */}
                  <div className="max-w-sm w-full bg-white border border-gray-200 rounded-[2rem] p-6 shadow-sm font-sans">
                    {/* Header Section */}
                    <div className="mb-6">
                      <h2 className="text-[22px] font-bold text-slate-900 tracking-tight">
                        Your Stack
                      </h2>
                      <p className="text-slate-400 text-sm mt-1">
                        No technologies selected yet.
                      </p>
                    </div>

                    {/* Empty State Box */}
                    <div className="flex items-center justify-center border border-dashed border-slate-300 rounded-xl py-8 mt-2">
                      <span className="text-slate-400 text-sm font-medium">
                        Your stack is empty.
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AvailableStacks;
