// "use client";

// import logo from "@/assets/logo.png";
// import { UserButton } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";
// import { CreditCard } from "lucide-react";
// import { useTheme } from "next-themes";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const { theme } = useTheme();

//   return (
//     <header className="shadow-sm">
//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 p-3">
//         <Link href="/ai-cv" className="flex items-center gap-2">
//           <Image
//             src={logo}
//             alt="Logo"
//             width={35}
//             height={35}
//             className="rounded-full"
//           />
//           <span className="text-xl font-bold tracking-tight">
//             AI Resume Builder
//           </span>
//         </Link>
//         <div className="flex items-center gap-3">
//           <UserButton
//             appearance={{
//               baseTheme: theme === "dark" ? dark : undefined,
//               elements: {
//                 avatarBox: {
//                   width: 35,
//                   height: 35,
//                 },
//               },
//             }}
//           >
//             <UserButton.MenuItems>
//               <UserButton.Link
//                 label="Billing"
//                 labelIcon={<CreditCard className="size-4" />}
//                 href="/billing"
//               />
//             </UserButton.MenuItems>
//           </UserButton>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

function Navbar() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between">
        <h1 className="text-2xl font-bold">
          <a href="http://localhost:5173">
            Job
            <span className="text-[#F83002]">Portal</span>
          </a>
        </h1>

        <div className="flex items-center space-x-4">
          <a href="/billing">Billing</a>
          <SignOutButton redirectUrl="/ai-cv">
            <Button
              variant="outline"
              className="ml-4 rounded bg-gray-500 px-4 py-2 text-white"
            >
              Sign Out
            </Button>
          </SignOutButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
