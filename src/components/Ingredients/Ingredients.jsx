import styles from './Ingredients.module.css';

function Ingredients() {
  return (
    <section id='ingredients'>
      <div className={`${styles.ingredients} container `}>
        <div className={styles.ingredients__row}>
          <div className={styles.ingredients__col}>
            <h2>Ingredients</h2>
            <ul>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ingredients;
