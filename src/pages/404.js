import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Page from "@/layout/page/Page.layout";
import { navigation } from "@/data/navigation";
import { Button, Result } from "antd";

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
      <div style={{}}>
        <Result
          status="404"
          title="404"
          subTitle={`Sorry, the page you visited does not exist. Redirecting to home page in ${count} seconds`}
          extra={
            <Button type="dashed" href="/">
              Back Home
            </Button>
          }
        />
      </div>
    </Page>
  );
}
