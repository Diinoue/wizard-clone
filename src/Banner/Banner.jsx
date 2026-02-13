import { useState, useEffect } from 'react';
import styles from '../Banner/Banner.module.css'
import banner1 from '../assets/banner/banner1.jpeg';
import banner2 from '../assets/banner/banner2upscale.png'
import banner3 from '../assets/banner/lizardbottleupscale.png'
import banner4 from '../assets/banner/banner4.jpg'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'


function Banner () {

    let [bannerIndex, setBannerIndex] = useState(0);

    let [bannerTitle, setBannerTitle] = useState("");
    let [bannerDescription, setBannerDescription] = useState("");
    let [bannerImg, setBannerImg] = useState("");
    
    /* Variável de estado banners */
    const [banners, setBanners] = useState([
        {
            title: "LZ SETUP",
            description: "For general purpose skating.",
            img: banner1
        },
        
        {
            title: "INLINE SKATES",
            description: "",
            img: banner2
        },

        {
            title: "LIZARD BOTTLE",
            description: "",
            img: banner3
        }
    ]);
    
    /* useEffect para atualizar o banner com o passar do tempo */
    useEffect(() => {
        setTimeout(() => {
            bannerIndex < 2? setBannerIndex(bannerIndex + 1) : setBannerIndex(0);        
             
            setBannerTitle(banners[bannerIndex].title);
            setBannerDescription(banners[bannerIndex].description);
            setBannerImg(banners[bannerIndex].img); 
             console.log(banners[bannerIndex].title);
            
            // if (bannerIndex >= 2) setBannerIndex(0);  // COMENTADO TEMPORARIAMENTE, RETORNAR CASO PRECISO
            console.log(`Banner index mudou: ${bannerIndex}`)
            console.log(`BannerTitle: ${bannerTitle}, BannerDescription: ${bannerDescription}, Bannerimg: ${bannerImg}`);
        }, 5000)        

        console.log(`BannerTitle: ${bannerTitle}, BannerDescription: ${bannerDescription}, Bannerimg: ${bannerImg}`);
    }, [bannerIndex])

    // FUNÇÕES DO BANNER -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-

    /* Retorna para o banner anterior */
    function handlePreviousBanner() {
        if (bannerIndex - 1 < 0) {
            console.log(`vai dar merda. retornando cedo ${bannerIndex}, ${bannerIndex - 1}`);
            return;
        }
        

        setBannerIndex(bannerIndex - 1);
        console.log(`Foi: ${bannerIndex}, ${bannerIndex - 1}`)
    }
    
    // HTML -=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-
    return (
        <div className={styles.container}>

    <div className={styles.arrowLeft} onClick={() => handlePreviousBanner()}> <img src={arrowLeft}></img> </div>
    <div className={styles.arrowRight}> <img src={arrowRight}></img> </div>

    <img className={styles.banner} src={bannerImg}></img>

        <div className={styles.card}>
            <h1 class={styles.cardTitle}>{bannerTitle}</h1>
            <div className={styles.cardText}>
                <p class={styles.cardText}>{bannerDescription}</p>
                <button class={styles.cardButton}>BUY NOW</button>
            </div>
        </div>

            

        </div>
    )
}
export default Banner;