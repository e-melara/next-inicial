import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";

export default function Home() {
  return (
    <>
      <h1>Page Home</h1>
      <h1 className='title'>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        <code className={'code'}>pages/index.js</code>
      </p>

    </>
  );
}

Home.getLayout = function(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
