import { type ILogin, loginSchema } from "@/lib/validators";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, type LiteralUnion, signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";
import { type BuiltInProviderType } from "next-auth/providers";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: ILogin) => {
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        ...values,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (result?.error) {
        toast.error("Đăng nhập thất bại, vui lòng thử lại!");
      } else {
        toast.success("Đăng nhập thành công!");
        await getSession();
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Đăng nhập thất bại, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthSignIn = async (
    provider: LiteralUnion<BuiltInProviderType>
  ) => {
    setLoading(true);
    try {
      await signIn(provider, { callbackUrl: "/dashboard" });
    } catch (error) {
      toast.error(`Đăng nhập với ${provider} thất bại, vui lòng thử lại`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Đăng Nhập</h2>
          <p className="text-gray-500">Xin chào quý khách, vui lòng đăng nhập!</p>
        </div>

        <div className="space-y-4">
          <Button
            className="w-full flex items-center justify-center bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition"
            onClick={() => {
              void handleOAuthSignIn("google");
            }}
            disabled={loading}
          >
            <Image
              className="w-5 h-5 mr-2"
              width={20}
              height={20}
              alt="Google"
              src="/img/google.svg"
            />
            Đăng nhập với Google
          </Button>
        </div>

        <div className="relative flex items-center py-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-4 text-gray-500">Hoặc</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Nhập email"
              {...register("email")}
              disabled={loading}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Nhập mật khẩu"
              {...register("password")}
              disabled={loading}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loading}
          >
            Đăng Nhập
          </Button>
        </form>

        <div className="text-center">
          <Link href="/register" className="text-sm text-blue-500 hover:underline">
            Tạo tài khoản mới
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
