import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type ILogin } from "@/lib/validators";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const { mutate: signUp } = api.user.signup.useMutation({
    onError: (err) => {
      toast.error(err.message);
      setLoading(false);
    },
    onSuccess: (data) => {
      toast.success("Đăng ký thành công!");
      setLoading(false);
      router.push("/login");
    },
  });

  const onSubmit = (values: ILogin) => {
    setLoading(true);
    signUp({ ...values });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Đăng ký tài khoản</h2>
        <form
          onSubmit={(e) => {
            void handleSubmit(onSubmit)(e);
          }}
          className="space-y-4"
        >
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Email"
              {...register("email")}
              disabled={loading}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Mật khẩu"
              maxLength={32}
              {...register("password")}
              disabled={loading}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {loading ? "Đang xử lý..." : "Đăng ký"}
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Đã có tài khoản?{' '}
            <Link href="/login" legacyBehavior>
              <a className="text-blue-500 hover:underline">Đăng nhập</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
