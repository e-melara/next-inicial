import Link from "next/link";
import { ReactElement } from "react";

import { MainLayout } from "../components/layout/MainLayout";

export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        <code className={'code'}>pages/contact.js</code>
      </p>
    </>
  );
}

Contact.getLayout = function(page: ReactElement) {
  return (
    <MainLayout>{page}</MainLayout>
  )
}
