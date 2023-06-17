import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (session) {
        await router.push("/");
      } else {
        await signIn("keycloak", { callbackUrl: `/` });
      }
    })();
  }, [session, router]);
  return <main />;
};

export default Home;