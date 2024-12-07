import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          <h1 className="text-2xl font-bold">
            <a href="http://localhost:5173">
              Job
              <span className="text-[#F83002]">Portal</span>
            </a>
          </h1>
        </div>
      </div>

      <div className="flex min-h-screen items-start justify-center pt-12">
        <SignIn />
      </div>
    </>
  );
}
