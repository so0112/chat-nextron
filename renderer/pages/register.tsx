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
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="w-10/12 mx-auto md:w-96">
        <h1 className="mb-2 text-lg font-medium">회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              className="mb-1 border-black border-2"
              defaultValue=""
              {...register("example")}
            />
          </div>

          <div>
            <input
              className="mb-1 border-black border-2"
              {...register("exampleRequired", { required: true })}
            />
          </div>
          {errors.exampleRequired && (
            <div>
              <small className="font-medium text-red-500">값을 넣어라</small>
            </div>
          )}

          <input
            className="w-20 py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded"
            type="submit"
          />
        </form>

        <small>
          아이디가 없으신가요?
          <Link href="/login">
            <a className="ml-1 text-blue-500 uppercase">로그인</a>
          </Link>
        </small>
      </div>
    </div>
  );
}
