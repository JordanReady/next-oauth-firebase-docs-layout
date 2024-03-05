import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Step 4: Customize and Develop Your App
      </h1>
      <div className="mb-4 flex gap-2">
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2 "
          href="/"
        >
          Home
        </Link>
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2 "
          href="/step/3"
        >
          Prev Step
        </Link>
        <Link
          className=" px-4 py-2 text-black bg-white
          border-black border-2 "
          href="/step/5"
        >
          Next Step
        </Link>
      </div>

      <p className="text-lg mb-4">
        Congratulations on completing the initial setup! Now it's time to
        customize the starter files and start developing your Next.js app.
      </p>

      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Clean Up Starter Files</h2>
        <p>
          The provided starter files are there to guide you. Feel free to clean
          up or remove files that were added for explanation purposes. You can
          delete routes or components that are not relevant to your project.
        </p>
      </div>

      <div className="bg-gray-200 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Start Developing</h2>
        <p>
          Navigate to the <code className="bg-slate-300">app</code> directory to
          begin building your application. This directory is where you'll find
          the core components and structure of your Next.js app. Explore and
          modify files based on your project requirements.
        </p>
      </div>

      <p>
        Happy coding! If you have any questions or run into issues during
        development, don't hesitate to refer to the Next.js documentation or
        seek help from the community.
      </p>
    </div>
  );
};

export default page;
