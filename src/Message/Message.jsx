import WebFont from 'webfontloader';
import { useState, useEffect } from 'react';
import styles from '../Message/Message.module.css'

function Message(){

    useEffect(() => {
        WebFont.load({
            google: {
                families:['Montserrat']
            }
        });
    }, []);
    
    return (
    /* BARRA INICIAL */
        /* MENSAGEM */
        <div className={styles.messageBox}>
            <div className={styles.text}>
                <p>USA TARIFFS: We cover all tarifs/importing change for USA orders. No additional fees on delivery, guaranteed.</p>
            </div>

            {/* DROPDOWN DE MOEDAS */}
            <div class={styles.dropdown}>
                <span className={styles.currencyDropdown}>
                    United States (USD $)
                </span>

                <div class={styles.dropdownContent}>
                    <button> Canada </button>
                    <button> Greece </button>
                    <button> United Kingdom </button>
                    <button> United States </button>
                </div>
            </div>
        </div>
    )
}

export default Message