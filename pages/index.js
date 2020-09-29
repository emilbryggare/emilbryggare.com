// import Nav from '../components/nav'
import Head from "next/head";

export default function IndexPage() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Emil Bryggare</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png'></link>
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon.png'></link>
      </Head>
      {/* <Nav /> */}
      <div className='p-20'>
        <h1 className='text-5xl text-center text-accent-1'>Hey, I'm Emil! 👋</h1>
        <p className='text-xl mt-3 text-center text-accent-1 max-w-md mx-auto'>
          I'm a software engineer from Sweden 🇸🇪 with a passion for building software products. I'm
          the co-founder of{" "}
          <a target='_blank' rel='noopener noreferrer' href='https://convas.io'>
            Convas
          </a>{" "}
          and{" "}
          <a href='https://basecanvas.com' rel='noopener noreferrer' target='_blank'>
            Basecanvas
          </a>
          .
        </p>
        <p className=' mt-3 text-xl text-center text-accent-1 max-w-md mx-auto'>
          Feel free to connect with me at{" "}
          <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/emilbryggare'>
            @emilbrygare
          </a>
          .
        </p>
      </div>
    </div>
  );
}
