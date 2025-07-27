import { cookies } from "next/headers";
import { decrypt } from "@/lib/configs/session";
import AdminLayoutClient from "@/components/admin_components/AdminLayoutClient";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = (await cookies()).get("session")?.value;
  let email = "";

  if (session) {
    const decrypted = await decrypt(session);
    email = decrypted?.email || "";
  }

  return (
    <AdminLayoutClient email={email}>
      {children}
    </AdminLayoutClient>
  );
}