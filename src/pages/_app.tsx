import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { type AppProps } from "next/app";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import Navbar from "~/components/Navbar";
import "~/styles/globals.css";

const publicPages : Array<string> = [];

function MyApp({ Component, pageProps } : AppProps) {
  // Get the pathname
  const { pathname } = useRouter();

  // Check if the current route matches a public page
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <Component {...pageProps} />
      ) : (
        <>
          <SignedIn>
            <Navbar> 
              <Component {...pageProps} />
            </Navbar>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
}

export default api.withTRPC(MyApp);