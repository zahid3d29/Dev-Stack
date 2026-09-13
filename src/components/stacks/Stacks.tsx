import { use, useState } from "react";
import type { Istack } from "../../types/stack";
import AvailableStacks from "./AvailableStacks";

interface StacksProps {
  stacksPromise: Promise<Istack[]>;
}

const Stacks = ({ stacksPromise }: StacksProps) => {
  // console.log({ stacksPromise });
  const stacks = use(stacksPromise);
  // console.log(stacks, "Stacks");
  const [addedStacks, setAddedStacks] = useState<Istack[]>([]);
  return (
    <div>
      <AvailableStacks stacks={stacks} addedStacks={addedStacks} setAddedStacks={setAddedStacks} />
    </div>
  );
};

export default Stacks;
