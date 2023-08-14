import LandingPage from "@/components/ui/custom/LandingPage";
import { getServerSession } from "next-auth";
export default async function Page() {
  const user = await getServerSession();
  return (
    <>
      <LandingPage />
    </>
  );
}
