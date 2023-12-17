import { useEffect, useState } from 'react';
import '../css/assets/Landing.css';

const Landing = ({heartItems}) => {
    const [landingOpen, setLandingOpen] = useState("");
    const landingClose = () => {
        setLandingOpen("landing-hide");
    };
    useEffect(()=>{
        if(heartItems !== null){
            setLandingOpen("landing-hide");
        }
    },[]);
    return (
        <section id="landing" className={landingOpen}>
            <div className="landing-inner">
                <div className="title-box --pos-center">
                    <h1 className="--font-title">
                        <span className="main">갖고싶어<br />고양이짤</span>
                        <span className="shadow">갖고싶어<br />고양이짤</span>
                    </h1>
                    <button className="btn-landing-close" onClick={landingClose}>짤만드러 가기</button>
                </div>
                <div className="catImgs-box --pos-center">
                    <img src="/images/mainImg-cat1.png" alt="메인 고양이 이미지1" />
                    <img src="/images/mainImg-cat2.png" alt="메인 고양이 이미지2" />
                    <img src="/images/mainImg-cat3.png" alt="메인 고양이 이미지3" />
                    <img src="/images/mainImg-cat4.png" alt="메인 고양이 이미지4" />
                </div>
            </div>
        </section>
    );
}

export default Landing;