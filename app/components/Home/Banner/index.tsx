import Button, {ThemeButton} from '~/shared/ui/Button';
import styles from './index.module.css';

const itemsImages = [
  {img: '/home/certified-organic.svg', text: 'Certified organic'},
  {img: '/home/ethically-sourced.svg', text: 'Ethically sourced'},
  {img: '/home/direct-trade-farm.svg', text: 'Direct trade with farm'},
  {img: '/home/functional-foods.svg', text: 'Functional foods'},
];

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Fine + Functional</h2>
          <p className={styles.text}>
            Welcome to a space where passion for craftsmanship and fine taste
            meets a holistic approach to living.
          </p>
          <Button theme={ThemeButton.ORANGE_HOVER} className={styles.button}>
            Shop Now
          </Button>

          <ul className={styles.itemsImages}>
            {itemsImages?.map((item) => (
              <li className={styles.itemImage} key={item.img}>
                <img src={item.img} alt={item.img} /> <p>{item?.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={'/home/banner.jpg'}
            sizes="100vw"
            alt="banner-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
