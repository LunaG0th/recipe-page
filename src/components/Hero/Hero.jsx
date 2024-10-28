import styles from './Hero.module.css';

function Hero() {
  return (
    <section id='hero'>
      <div className={`${styles.hero} container`}>
        <div className={styles.hero__row}>
          <div className={styles.col}>
            <picture>
              <img
                src='./omelette.jpeg'
                alt='omelette recipe'
                width='1312'
                height='600'
              />
            </picture>
            <div className={styles.intro__wrapper}>
              <h1>Simple Omelette Recipe</h1>
              <p>
                An easy and quick dish, perfect for any meal. This classic
                omelette combines beaten eggs cooked to perfection, optionally
                filled with your choice of cheese, vegetables, or meats.
              </p>
              <div className={styles.prep_time}>
                <h2>Preparation time</h2>
                <ul>
                  <li>
                    <span>Total:</span>Approximately 10 minutes
                  </li>
                  <li>
                    <span>Preparation:</span>5 minutes
                  </li>
                  <li>
                    <span>Cooking:</span>5 minutes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
