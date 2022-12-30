import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

type Inputs = {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onSubmit" });

  const [erorFromSubmit, setErorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-auto">
        <h1 className="mb-2 text-lg font-medium">로그인</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="이메일"
            className="mb-1 p-1 border-2"
            type={"email"}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            placeholder="비밀번호"
            className="mb-1 p-1 border-2"
            type={"password"}
            {...register("password", { required: true, minLength: 8 })}
          />

          {errors && (errors.email || errors.password) && (
            <small className="text-red-400">잘못된 로그인 정보입니다.</small>
          )}

          <input
            disabled={loading}
            className="w-80 py-2 mb-1 font-bold text-white bg-gray-400 rounded cursor-pointer"
            type="submit"
          />
        </form>

        <small>
          아이디가 없으신가요?
          <Link href="/register">
            <a className="ml-1 text-blue-500">회원가입</a>
          </Link>
        </small>
      </div>
    </div>
  );
}
