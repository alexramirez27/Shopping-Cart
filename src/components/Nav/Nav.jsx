import CartIcon from '../CartIcon.jsx';
import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav>
            <h2>Home</h2>
            <h2>Shop</h2>
            <div className={styles["cart-container"]}>
                <h2>99</h2>
                <CartIcon />
            </div>
        </nav>
    );
}