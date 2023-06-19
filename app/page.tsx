import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/auth/auth";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {/* <Navbar />
            <div className="mx-auto container">
                <LandingPage />
            </div>   */}
      <LoginButton />
      <RegisterButton />
      <LogoutButton />
      <ProfileButton />

      <h1>Server Session</h1>
      <p>{JSON.stringify(session)}</p>
    </>
  );
}
