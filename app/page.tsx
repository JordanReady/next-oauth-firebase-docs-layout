import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col text-center align-middle justify-center mx-auto p-8 pt-[85px]">
      <Reveal>
        <h1 className=" text-6xl md:text-9xl font-bold mb-4">
          JR
          <span className=" text-primary">ui</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Next | OAuth | Firebase <br />
          Docs Layout
        </h2>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="md:text-2xl">
          This layout is made with Next/OAuth/Firebase template starter kit.
          Please refer to the Next/OAuth/Firebase template documentation to
          effortlessly set up your project.
        </p>
      </Reveal>
      <Reveal className="flex center gap-2" delay={0.6}>
        <Link
          className=" mt-4 btn-hover px-4 py-2 text-black bg-white
          border border-gradient"
          href="https://jrui.vercel.app/docs/next-oauth-firebase"
        >
          Set up Project
        </Link>
        <Link
          className=" mt-4 btn-hover px-4 py-2 text-black bg-white
          border border-gradient"
          href="/docs"
        >
          Go to Docs
        </Link>
      </Reveal>
    </div>
  );
}
