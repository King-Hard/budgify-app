import Sidebar from "@/components/admin_components/Sidebar";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/configs/session";
import ProfileDropdown from "@/components/ProfileDropdown";
import { Columns2 } from "lucide-react";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = (await cookies()).get("session")?.value;
  let email = "";

  if (session) {
    const decrypted = await decrypt(session);
    email= decrypted?.email || "";
  };

  return (
    <div className="flex"> 
      <Sidebar/>
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-1.5 px-4 max-h-[60px] border-b-1 border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-1 rounded-sm hover:bg-blue-100 hover:text-[#3786F2]">
              <Columns2 className="w-5 h-5"/>
            </div>
            <h1 className="font-medium">Financial Dashboard</h1>
          </div>
          {email ? (
            <ProfileDropdown email={email} />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}