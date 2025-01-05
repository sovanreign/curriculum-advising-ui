import {
  FaBell,
  FaCircleUser,
  FaDoorOpen,
  FaFile,
  FaFileInvoice,
  FaGraduationCap,
  FaUserGroup,
} from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

export function Sidebar() {
  const items = [
    {
      name: "Profile",
      icon: FaCircleUser,
      path: "/profile",
    },
    {
      name: "Students",
      icon: FaGraduationCap,
      path: "/students",
    },
    {
      name: "Coaches",
      icon: FaUserGroup,
      path: "/coaches",
    },
    {
      name: "Manage Coaching",
      icon: FaFile,
      path: "/manage-coaching",
    },
    {
      name: "Programs",
      icon: FaFileInvoice,
      path: "/programs",
    },
    {
      name: "Notifications",
      icon: FaBell,
      path: "/notifications",
    },
    {
      name: "Logout",
      icon: FaDoorOpen,
      path: "/logout",
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="fixed h-screen w-60 bg-white py-4 border-r-2">
      <div className="h-full flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <img src="/logo.png" alt="" className="w-24 h-24" />
          <h6 className=" font-bold">Curriculum Advising</h6>
          <p className="text-sm">Management System</p>
        </div>
        <ul className="p-2 text-base-content space-y-2">
          {items.map((item) => (
            <li
              key={item.name}
              className={`flex font-semibold items-center gap-3 p-2 ${
                location.pathname.startsWith(item.path)
                  ? "bg-red-500 text-white"
                  : "hover:bg-base-200 text-gray-600"
              }  hover:cursor-pointer rounded-md`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className="w-6 h-6 " />
              <p className=" text-sm">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
