import styles from './Nutrition.module.css';

function Nutrition() {
  return (
    <section id='nutrition'>
      <div className={`${styles.nutrition} container `}>
        <div className={styles.nutrition__row}>
          <div className={styles.nutrition__col}>
            <h2>Nutrition</h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings. Calories
            </p>
            <ul>
              <li>
                <p>Calories</p> <span>277kcal</span>
              </li><hr />
              <li>
                <p>Carbs</p> <span>Og</span>
              </li><hr />
              <li>
                <p>Protein</p> <span>20g</span>
              </li><hr />
              <li>
                <p>Fat</p> <span>22g</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nutrition;
