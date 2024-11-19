"use client";
import Container from "@/components/Container";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  console.log("%cERROR BOUNDARY LOG ->", "color: magenta;", error);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      reset();
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [error, reset]);

  const isForbidden = error.message.includes("Forbidden");

  return isForbidden ? (
    <Container>
      <p className="text-accent">
        Sorry, this API do not allow many requests. If you see this message, please wait 5 minutes.
        Possibly API server will respond
      </p>
    </Container>
  ) : (
    <Container>
      <p className="text-accent">Server Error</p>
    </Container>
  );
};

export default Error;
