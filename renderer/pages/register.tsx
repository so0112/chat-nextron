import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRef, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import md5 from "md5";
import { child, getDatabase, ref, set } from "firebase/database";

type Inputs = {
  email: string;
  name: string;
  password: string;
  passwordCheck: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const [erorFromSubmit, setErorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const password = useRef<string>();
  password.current = watch("password");

  const ALREADY_USE = "Firebase: Error (auth/email-already-in-use).";

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      let createdUser = await createUserWithEmailAndPassword(auth, data.email, data.password);

      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: `http:gravatar.com/avatar/${md5(createdUser.user.email)}?d=identicon`,
      });

      console.log(createdUser);

      const db = getDatabase();
      set(ref(db, `users/${createdUser.user.uid}`), {
        username: data.name,
        email: data.email,
        profile_picture: createdUser.user.photoURL,
      });

      setLoading(false);
    } catch (error) {
      if (error.message === ALREADY_USE) {
        setErorFromSubmit("이미 사용중인 이메일입니다.");
      }
      setLoading(false);
      setTimeout(() => {
        setErorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-auto">
        <h1 className="mb-2 text-lg font-medium">회원가입</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="이메일"
            className="mb-1 p-1 border-2"
            type={"email"}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors.email && <small className="mb-1 text-red-400">올바른 이메일을 입력해주세요 (@ 포함)</small>}

          <input
            placeholder="닉네임"
            className="mb-1 p-1 border-2"
            {...register("name", { required: true, maxLength: 10 })}
          />

          {errors.name && errors.name.type === "required" && (
            <small className="mb-1 text-red-400">닉네임을 입력해주세요</small>
          )}

          {errors.name && errors.name.type === "maxLength" && (
            <small className="mb-1 text-red-400">10자 이내의 닉네임을 사용해주세요</small>
          )}

          <input
            placeholder="비밀번호"
            className="mb-1 p-1 border-2"
            type={"password"}
            {...register("password", { required: true, minLength: 8 })}
          />

          {errors.password && errors.password.type === "required" && (
            <small className="mb-1 text-red-400">비밀번호를 입력해주세요</small>
          )}

          {errors.password && errors.password.type === "minLength" && (
            <small className="mb-1 text-red-400">비밀번호는 최소 8자 이상입니다</small>
          )}

          <input
            placeholder="비밀번호 확인"
            className="mb-1 p-1 border-2"
            type={"password"}
            {...register("passwordCheck", {
              required: true,
              validate: (value) => value === password.current,
            })}
          />

          {errors.passwordCheck && errors.passwordCheck.type === "required" && (
            <small className="mb-1 text-red-400">비밀번호 확인을 입력해주세요</small>
          )}

          {errors.passwordCheck && errors.passwordCheck.type === "validate" && (
            <small className="mb-1 text-red-400">비밀번호가 다릅니다</small>
          )}

          {erorFromSubmit && <small className="mb-1 text-red-400">{erorFromSubmit}</small>}

          <input
            disabled={loading}
            className="w-80 py-2 mb-1 font-bold text-white bg-gray-400 rounded cursor-pointer"
            type="submit"
          />
        </form>

        <small>
          아이디가 있으신가요?
          <Link href="/login">
            <a className="ml-1 text-blue-500">로그인</a>
          </Link>
        </small>
      </div>
    </div>
  );
}
