import type { Istack } from "../../types/stack";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { IoIosStar } from "react-icons/io";

const StackCard = ({
  stack,
  setSelectedStacks,
  addedStacks,
  setAddedStacks,
}: {
  stack: Istack;
  selectedStacks: number;
  setSelectedStacks: Dispatch<SetStateAction<number>>;
  addedStacks: Istack[];
  setAddedStacks: Dispatch<SetStateAction<Istack[]>>;
}) => {
  const isSelected = addedStacks.some(
    (addedStack) => addedStack.id === stack.id,
  );
  const handleAddToStack = (stack: Istack) => {
    if (isSelected) return;

    setSelectedStacks((count) => count + 1);
    setAddedStacks((prevStacks) => [...prevStacks, stack]);
    toast.success(`${stack.name} added to your stack!`, {
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
  // console.log(addedStacks, "from stackCard");
  return (
    <div
      key={stack.id}
      className="w-full md:w-[350px] rounded-xl border border-slate-200 bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
    >
      <div className="mb-3 flex items-start justify-between">
        <img
          className="h-6 w-6 rounded-full"
          src={stack.icon}
          alt={stack.name}
        />

        <span className="rounded-full bg-sky-50 px-2 py-1 text-[9px] font-medium text-sky-500">
          {stack.category}
        </span>
      </div>

      <h3 className="mb-2 text-sm font-semibold text-slate-900">
        {stack.name}
      </h3>

      <p className="mb-3 min-h-[48px] text-[10px] leading-4 text-slate-500">
        {stack.description}
      </p>

      <div className="mb-3 flex items-center justify-between gap-2 text-[8px]">
        <span className="rounded bg-slate-100 px-1.5 py-1 font-medium text-slate-500">
          {stack.badge}
        </span>

        <span className="text-slate-500">{stack.difficulty}</span>

        <span className="flex items-center gap-1 text-slate-600">
          <IoIosStar className="text-amber-400 text-lg" />
          {stack.rating}
        </span>
      </div>

      <button
        className={`w-full rounded-lg py-2 text-sm font-semibold text-white transition-colors ${isSelected ? "bg-slate-400 cursor-not-allowed" : "bg-gray-900 hover:bg-gray-800"}`}
        onClick={() => handleAddToStack(stack)}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default StackCard;
