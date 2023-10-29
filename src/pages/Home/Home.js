import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={styles["section__container"]}>
        <h1>Game of Thrones: Epic Sagas of Westeros and Beyond</h1>
      </section>

      <section className={styles["section__container"]}>
        <h2>🏰 The Age of Heroes and Legends</h2>
        <p>
          In a land where ancient tales come alive and honor clashes with
          betrayal, venture into the realms of Westeros and Essos. Dive deep
          into the chronicles of noble houses, dragons, and mysterious lands
          that lie beyond the Wall.
        </p>
      </section>

      <section className={styles["section__container"]}>
        <h2>🔥 From the Ashes of Valyria to the Iron Throne</h2>
        <p>
          The once-great empire of Valyria, with its dragons and magic, now
          stands as a testament to the perils of power and ambition. But amidst
          the ruins of the old, the Seven Kingdoms of Westeros vie for control
          of the coveted Iron Throne.
        </p>
      </section>

      <section className={styles["section__container"]}>
        <h2>⚔️ The Realm of Power Games and Alliances</h2>
        <p>
          Embark on a gripping journey with our immersive web experience, named
          "Game of Thrones." As a lord or lady of a noble house, navigate the
          intricate webs of politics, loyalty, and warfare. Your choices will
          shape the fate of the realm.
        </p>
      </section>

      <section className={styles["section__container"]}>
        <h2>👑 Noble, Warrior, Visionary</h2>
        <p>
          In the Game of Thrones, you can be a diplomat forging alliances, a
          warrior leading armies, or a visionary guiding your house to
          supremacy. Every decision matters in this perilous world of ice and
          fire.
        </p>
      </section>

      <section className={styles["section__container"]}>
        <h2>🌌 Discover the Enigmas of Essos and Beyond</h2>
        <p>
          Venture into the vast landscapes of Essos, from the trading cities of
          Slaver's Bay to the mysteries of Asshai. Explore Westeros from the icy
          tundras of the North to the sun-soaked Water Gardens of Dorne. Every
          corner of the realm hides tales waiting to be unveiled.
        </p>
      </section>
    </>
  );
}

export default Home;
