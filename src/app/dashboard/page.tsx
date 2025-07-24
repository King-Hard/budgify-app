import { logout } from "@/lib/controllers/authentication";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <button 
        onClick={logout}
        className="text-9xl font-bold border p-5 hover:bg-black hover:text-white"
      >
        LOGOUT
      </button>
      <div>
        
      </div>
    </div>
  );
};