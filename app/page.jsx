import MostRead from "@/components/home/most-read";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[90%] sm:w-[80%]">
      <h1 className="text-blue-500 ">Most Read Blogs</h1>
      <MostRead />
    </main>
  );
}
