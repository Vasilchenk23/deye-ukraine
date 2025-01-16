import Head from "next/head";
import Image from "next/image";

export const Solution = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Дізнайтеся про переваги інверторів Deye: висока якість, ефективність, надійність та безпека."
        />
        <meta
          name="keywords"
          content="інвертори Deye, переваги інверторів, сонячні інвертори, енергоефективність, надійність"
        />
        <meta property="og:title" content="Переваги використання інверторів Deye" />
        <meta
          property="og:description"
          content="Дізнайтеся про переваги інверторів Deye: висока якість, ефективність, надійність та безпека."
        />
        <meta property="og:image" content="/images/deye.png" />
        <meta property="og:url" content="https://deye-ukraine.vercel.app/solution" />
      </Head>
      <main className="block-deye" id="header">
        <div className="goal-deye">
          <h1>ПЕРЕВАГИ ВИКОРИСТАННЯ IНВЕНТОРIВ DEYE</h1>
          <ul>
            <li><b>Висока якість:</b> інвертори Deye вирізняються довговічністю та стабільною роботою.</li>
            <li><b>Ефективність:</b> завдяки високому коефіцієнту перетворення, інвертори Deye сприяють зниженню витрат електроенергії.</li>
            <li><b>Надійність:</b> тривалий термін служби та безвідмовна робота є ключовими характеристиками інверторів Deye.</li>
            <li><b>Безпека:</b> інвертори Deye обладнані сучасними системами захисту від перенапруг, перевантажень та коротких замикань, що відповідає найвищим стандартам безпеки.</li>
          </ul>
          <br />
          <br />
          {/* <nav className="item-button">
           <a href="/blog/batteries-for-solar-panels-how-to-ensure-uninterrupted-power-supply"><button className="btn-primary">Докладнiше</button></a> 
          </nav> */}
        </div>
        <div className="image-company-deye">
          <Image className="deye-company" src="/images/deye.png" width={250} height={201} alt="deye" />
        </div>
      </main>
    </>
  );
};
