import SignInForm from "@/components/form/signin-form";

interface SignInPageProps {
  searchParams: {
    callbackUrl: string;
  };
}
const SignInPage = ({ searchParams: { callbackUrl } }: SignInPageProps) => {
  return (
    <div className="w-full">
      <SignInForm callbackUrl={callbackUrl || "/"} />
    </div>
  );
};

export default SignInPage;
