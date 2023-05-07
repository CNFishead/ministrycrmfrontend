import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Page from "@/layout/page/Page.layout";
import { navigation } from "@/data/navigation";

export default function NotFound() {
  const navigate = useRouter();

  const [count, setCount] = useState(10);
  const timer = setTimeout(() => {
    setCount(count - 1);
  }, [1000]);
  useEffect(() => {
    const autoNav = setTimeout(() => {
      navigate.push("/");
    }, 10000);

    return () => {
      clearTimeout(autoNav);
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [navigate]);

  return (
    <Page pages={[navigation.home]} largeSideBar={true}>
      <div style={{ margin: "15% auto", textAlign: "center" }}>
        <div className="not-found-container container">
          <div>
            <h1>404 - Page Not Found</h1>
            <p>
              You will be redirected to <Link href="/">Homepage</Link> in {count}s
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
