import Head from 'next/head';
import styles from '../styles/Home.module.css';
import demoStyles from '../styles/demo.module.css';
import docusignSvg from '../assets/docusign.svg';
import docusignPng from '../assets/docusign.png';
import Image from 'next/image';
import config from '../next.config';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Hello World!
        </h1>
        <p className={demoStyles['times-new-roman-font']}>Times New Roman</p>
        <p className={demoStyles['arial-font']}>Arial</p>
        <p className={demoStyles['courier-font']}>Courier</p>
        <h1>PNG Image</h1>
        <Image src={docusignPng} alt="DocuSign Logo" />
        <h1>SVG Image</h1>
        <Image src={docusignSvg} alt="DocuSign Logo" width={400} height={400} />
        <h1 className={styles.title}>
          <a href={config.getLinkBasePath()}>Back to Home!</a>
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by {'DocuSign'}
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}