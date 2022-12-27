import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRef } from "react";

type Inputs = {
  email: string;
  nickname: string;
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const password = useRef();
  password.current = watch("password");

  console.log(watch("email"));

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-auto">
        <h1 className="mb-2 text-lg font-medium">회원가입</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="이메일"
            className="w-60 mb-2 border-black border-2 p-1"
            defaultValue=""
            type={"email"}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          {errors.email && (
            <small className="">올바른 이메일을 입력해주세요</small>
          )}

          <input
            placeholder="닉네임"
            className="w-60 mb-2 border-black border-2 p-1"
            {...register("nickname", { required: true, maxLength: 10 })}
          />

          {errors.nickname && errors.nickname.type === "required" && (
            <small className="">닉네임을 입력해주세요</small>
          )}

          {errors.nickname && errors.nickname.type === "maxLength" && (
            <small className="">10자 이내의 닉네임을 사용해주세요</small>
          )}

          <input
            placeholder="비밀번호"
            className="w-60 mb-2 border-black border-2 p-1"
            type={"password"}
            {...register("password", { required: true, minLength: 8 })}
          />

          {errors.password && errors.password.type === "required" && (
            <small className="">비밀번호를 입력해주세요</small>
          )}

          {errors.password && errors.password.type === "minLength" && (
            <small className="">비밀번호는 최소 8자 이상입니다</small>
          )}

          <input
            placeholder="비밀번호 확인"
            className="w-60 mb-2 border-black border-2 p-1"
            type={"password"}
            {...register("passwordCheck", {
              required: true,
              validate: (value) => value === password.current,
            })}
          />

          {errors.passwordCheck && errors.passwordCheck.type === "required" && (
            <small className="">비밀번호 확인을 입력해주세요</small>
          )}

          {errors.passwordCheck && errors.passwordCheck.type === "validate" && (
            <small className="">비밀번호가 다릅니다</small>
          )}

          {/* {errors.exampleRequired && (
            <div>
              <small className="font-medium text-red-500">
                input 값을 모두 채워주세요
              </small>
            </div>
          )} */}

          <input
            className="w-60 py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded"
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
