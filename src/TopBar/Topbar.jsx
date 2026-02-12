import styles from '../Topbar/Topbar.module.css'
import lizardLogo from'../assets/lizardlogo.png'
import wizardLogo from '../assets/WIZARD_header.png'
import user from '../assets/user.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'



function Topbar () {
    return(
        <div className={styles.topbarBg}>

            <div className={styles.topbarContents}>
                <img className={styles.logo} src={lizardLogo}></img>

                <div className={styles.pages}>
                    <a className={styles.page}href="#">SHOP</a>
                    <a className={styles.page}href="#">INFO</a>
                </div>

                <div className={styles.buttons}>
                    <a className={styles.button}href="#"><img className={styles.image} src={user}/></a>
                    <a className={styles.button}href="#"><img className={styles.image} src={search}/></a>
                    <a className={styles.button}href="#"><img className={styles.image} src={cart}/></a>
                </div>
            </div>
        </div>
    )
}

export default Topbar