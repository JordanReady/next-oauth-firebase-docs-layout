import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Your Next.js Auth/Firebase Starter Kit
      </h1>
      <p className="text-lg mb-8">
        Welcome to your new Next.js app with NextAuth.js and Firebase set up out
        of the box. Simply follow each of the steps to get your next project
        ready to go!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Link href="/step/1">
          <div className="bg-gray-200 p-4 hover:border-black border-2 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">
              Step 1: Set up Google Cloud Account
            </h2>
            <p>
              Follow these steps to create a Google Cloud account and set up
              your project for this Next.js app:
            </p>
            <ol className="list-decimal pl-4 mt-2">
              <li>
                Create a Google Cloud account at{" "}
                <a
                  className="underline"
                  href="https://console.cloud.google.com/"
                >
                  Google Cloud Console
                </a>
                .
              </li>
              <li>Set up a new project for your Next.js app.</li>
              <li>
                Generate API keys and credentials for Firebase authentication.
              </li>
            </ol>
            <p className="mt-2">
              For detailed instructions, refer to the{" "}
              <a
                className="underline"
                href="https://cloud.google.com/gcp/getting-started"
              >
                Google Cloud Getting Started Guide
              </a>
              .
            </p>
          </div>
        </Link>

        <Link href="/step/2">
          <div className="bg-gray-200 hover:border-black border-2 p-4 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">
              Step 2: Set up Firebase Project
            </h2>
            <p>
              Now, let's set up a Firebase project to use as the backend for
              your Next.js app:
            </p>
            <ol className="list-decimal pl-4 mt-2">
              <li>
                Create a Firebase account at{" "}
                <a
                  className="underline"
                  href="https://console.firebase.google.com/"
                >
                  Firebase Console
                </a>
                .
              </li>
              <li>
                Add a new project and configure Firebase for web applications.
              </li>
              <li>
                Retrieve the Firebase config settings, including the apiKey,
                authDomain, projectId, and storageBucket.
              </li>
            </ol>
            <p className="mt-2">
              Refer to the{" "}
              <a
                className="underline"
                href="https://firebase.google.com/docs/web/setup"
              >
                Firebase Web Setup Guide
              </a>{" "}
              for detailed instructions.
            </p>
          </div>
        </Link>

        <Link href="/step/3">
          <div className="bg-gray-200 hover:border-black border-2 p-4 cursor-pointer">
            <h2 className="text-xl font-semibold mb-2">
              Step 3: Set up env files and firebase.ts
            </h2>
            <p>
              Configure environment files and create a <code>firebase.ts</code>{" "}
              file to manage Firebase settings:
            </p>
            <ol className="list-decimal pl-4 mt-2">
              <li>
                Create a <code>.env</code> file in your project root with <br />
                <code>cp .env.example .env</code> <br />
                Replace the placholder values with your newly setup google cloud
                and firebase configs.
              </li>
              <li>
                Create a <code>firebase.ts</code> file with Firebase
                initialization and configuration.
              </li>
            </ol>
            <p className="mt-2">
              View the{" "}
              <a
                className="underline"
                href="https://nextjs.org/docs/basic-features/environment-variables"
              >
                Next.js Environment Variables documentation
              </a>{" "}
              for details on setting up environment variables.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
