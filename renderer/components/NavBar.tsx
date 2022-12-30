import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 h-16 bg-gray-200">
      <span className="text-2xl font-semibold text-gray-400">
        <Link href="/chat">
          <a>HOME</a>
        </Link>
      </span>

      <div className="flex">
        <>
          <Link href="/login">
            <a className="w-20 px-2 pt-1 mr-2 text-sm text-center text-blue-500 border border-blue-500 rounded h-7">
              로그인
            </a>
          </Link>
          <Link href="/register">
            <a className="w-20 px-2 pt-1 text-sm text-center text-white bg-gray-400 rounded h-7">회원가입</a>
          </Link>
        </>
      </div>
    </div>
  );
};

export default NavBar;
