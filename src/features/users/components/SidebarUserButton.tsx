/* eslint-disable @typescript-eslint/no-unused-vars */
import { SidebarUserButtonClient } from "@/features/users/components/_SidebarUserButtonClient";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";

export function SidebarUserButton() {
  return (
    <Suspense>
      <SidebarUserSuspense />
    </Suspense>
  );
}
async function SidebarUserSuspense() {
  const { userId } = await auth();
  return (
    <SidebarUserButtonClient
      user={{
        email: "manhtranduc0202@gmail.com",
        name: "manh",
        imageUrl: "",
      }}
    />
  );
}
