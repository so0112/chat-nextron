import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="m-auto">
        <h1 className="mb-2 text-lg font-medium">로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              placeholder="이메일"
              className="w-60 mb-2 border-black border-2 p-1"
              defaultValue=""
              {...register("example")}
            />
          </div>

          <div>
            <input
              placeholder="비밀번호"
              className="w-60 mb-2 border-black border-2 p-1"
              {...register("exampleRequired", { required: true })}
            />
          </div>

          {/* {errors.exampleRequired && (
            <div>
              <small className="font-medium text-red-500">input 값을 모두 채워주세요</small>
            </div>
          )} */}

          <input
            className="w-60 py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded"
            type="submit"
          />
        </form>

        <small>
          아이디가 없으신가요?
          <Link href="/register">
            <a className="ml-1 text-blue-500 uppercase">회원가입</a>
          </Link>
        </small>
      </div>
    </div>
  );
}
