import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Stacks from "./components/stacks/Stacks";
import { Suspense } from "react";
import type { Istack } from "./types/stack";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const stacksFetch = async (): Promise<Istack[]> => {
  const res = await fetch("/stacks.json");
  if (!res.ok) {
    throw new Error(`Unable to load stacks: ${res.status}`);
  }
  const data = await res.json();
  return data;
};

function App() {
  // console.log(stacksFetch());

  const stacksPromise = stacksFetch();
  return (
    <>
      <Nav />
      <Banner />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
          </div>
        }
      >
        <Stacks stacksPromise={stacksPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
