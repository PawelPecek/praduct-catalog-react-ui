import { useState } from "react";
import { DATA } from "../DATA";
import HeroItem from "../components/heroItem";
import HeroTextBlock from "../components/heroTextBlock";
import FormPop from "../components/formPop";

export const Home = () => {
    const [page, setPage] = useState({
        page: 1,
        direction: 0
    });
    const [activeItem, setActiveItem] = useState("");
    const [showOrderForm, setShowOrderForm] = useState(false);
    const nextPage = ()=>{
        const potential = page.page + 1;
        if(potential <= (DATA.home.length / 3)) {
            setPage({
                page: potential,
                direction: 1
            });
        }
    }
    const previousPage = ()=>{
        const potential = page.page - 1;
        if(potential > 0) {
            setPage({
                page: potential,
                direction: -1
            });
        }
    }
    const openItem = ind=>{
        setActiveItem(ind.toString());
    }
    const openForm = ()=>{
        setShowOrderForm(true);
    }
    return (
        <section id="home">
            <div className="top-bar">
                <div className="logo">
                    Interiors
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={openForm}>
                            <i className="fa-solid fa-envelope"></i>
                            &nbsp;
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
            <div className="middle">
                <div className="title">
                    <HeroTextBlock activeItem={activeItem} page={page.page} setPopUp={setShowOrderForm} />
                </div>
                <div className="row">
                    <div onClick={()=>{openItem(1)}}>
                        <HeroItem
                            isActive={(activeItem === "1")}
                            isHide={(activeItem === "2")||(activeItem === "3")}
                            orderNumber={1}
                            imageList={[DATA.home[0].img, DATA.home[3].img]}
                            position={page.page}
                            changeDirectionIndicator={page.direction}
                        />
                    </div>
                    <div onClick={()=>{openItem(2)}}>
                        <HeroItem
                            isActive={(activeItem === "2")}
                            isHide={(activeItem === "1")||(activeItem === "3")}
                            orderNumber={2}
                            imageList={[DATA.home[1].img, DATA.home[4].img]}
                            position={page.page}
                            changeDirectionIndicator={page.direction}
                        />
                     </div>
                     <div onClick={()=>{openItem(3)}}>
                        <HeroItem
                            isActive={(activeItem === "3")}
                            isHide={(activeItem === "1")||(activeItem === "2")}
                            orderNumber={3}
                            imageList={[DATA.home[2].img, DATA.home[5].img]}
                            position={page.page}
                            changeDirectionIndicator={page.direction}
                        />
                    </div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="social-media">
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className="controls">
                    <div className="left-arrow" onClick={previousPage}>
                        <i 
                        className={"fa-solid fa-angle-left " + ((page.page > 1) ? "active-color" : "")}
                        style={{ cursor: ((page.page > 1) ? "pointer" : "default")}}
                        ></i>
                    </div>
                    <div className="page">{ page.page }&nbsp;/&nbsp;{DATA.home.length / 3}</div>
                    <div className="right-arrow" onClick={nextPage}>
                        <i 
                        className={"fa-solid fa-angle-right " + ((page.page < DATA.home.length / 3) ? "active-color" : "")}
                        style={{ cursor: ((page.page < DATA.home.length / 3) ? "pointer" : "default")}}
                        ></i>
                    </div>
                </div>
            </div>
            <div className="close" style={{right:((activeItem !== "") ? "0px" : "-50px")}} onClick={()=>{openItem("")}}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <FormPop active={showOrderForm} toggleActive={setShowOrderForm} />
        </section>
    )
}