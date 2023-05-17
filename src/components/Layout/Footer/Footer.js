import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.item_1}>
                <div>
                    <span className={styles.nameStore}>STORE</span><br />
                    <span >Everything you need</span>
                </div>
            </div>
            <div className={styles.item_2}>
                <span>
                    Company <br/>
                    About <br / >
                    Contact us <br />
                    Support <br />
                    Careers
                </span>
            </div>
            <div className={styles.item_2}>
                <span>
                    Quick Link <br/>
                    Share Location <br />
                    Orders Tracking <br />
                    FAQs
                </span>
            </div>
            <div className={styles.item_2}>
                <span>
                    Legal <br/>
                    Terms & conditions <br />
                    Privacy Policy
                </span>
            </div>
        </div>
    )
}

export default Footer