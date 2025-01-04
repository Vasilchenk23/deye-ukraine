import Image from "next/image";

export const Solution = () => {
    return(
        <>
            <main className="block-deye" id="solution">
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
                    <nav className="item-button">
                        <button className="btn-primary">Докладнiше</button>
                    </nav>
                </div>
                <div className="image-company-deye">
                    <Image className="deye-company" src="/images/deye.png" width={250} height={201} alt="deye" />
                </div>
            </main>
        </>
    );
}