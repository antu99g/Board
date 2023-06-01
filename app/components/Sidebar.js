import Link from "next/link";
import Image from "next/image";

function Sidebar({ activeSection }) {
  return (
    <div className="md:w-1/4 lg:w-1/6 py-9 md:px-4 lg:px-8 hidden md:flex flex-col bg-black text-white rounded-3xl">
      <h2 className="mb-8">Board.</h2>

      <ul className="flex flex-col test-base md:text-sm lg:test-base">
        <li
          className={`mb-5 flex items-center ${
            activeSection === "dashboard" ? "font-bold" : "font-thin"
          }`}
        >
          <Image
            src="/dashboard_icon.svg"
            height={13}
            width={13}
            alt="Dashboard icon"
            className="md:mr-2 lg:mr-3.5 stroke-2"
          />
          <Link href="">Dashboard</Link>
        </li>

        <li className="mb-5 flex items-center font-thin">
          <Image
            src="/transaction-icon.png"
            height={12}
            width={12}
            alt="Transaction icon"
            className="md:mr-2 lg:mr-3.5"
          />
          <Link href="">Transactions</Link>
        </li>

        <li className="mb-5 flex items-center font-thin">
          <Image
            src="/schedule-icon.png"
            height={14}
            width={15}
            alt="Schedule icon"
            className="md:mr-2 lg:mr-3.5"
          />
          <Link href="">Schedules</Link>
        </li>

        <li className="mb-5 flex items-center font-thin">
          <Image
            src="/user-icon.png"
            height={14}
            width={14}
            alt="User icon"
            className="md:mr-2 lg:mr-3.5"
          />
          <Link href="">Users</Link>
        </li>

        <li className="mb-5 flex items-center font-thin">
          <Image
            src="/setting-icon.png"
            height={13}
            width={13}
            alt="Settings icon"
            className="md:mr-2 lg:mr-3.5"
          />
          <Link href="">Settings</Link>
        </li>
      </ul>

      <ul className="flex flex-col mt-auto text-gray-300 text-sm font-thin">
        <li className="mb-2.5">
          <Link href="">Help</Link>
        </li>
        <li>
          <Link href="">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
