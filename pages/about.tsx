import Link from "next/link";
import React from "react";
import { MainLayout } from "../components/layout/MainLayout";

export default function AboutPage() {
  return (
    <>
      <h1>Page About</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        <code className={'code'}>pages/about.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function(page: React.ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
