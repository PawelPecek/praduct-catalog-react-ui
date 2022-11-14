import { useEffect, useRef } from "react";
import { DATA } from "../DATA";

const HeroTextBlock = ({ activeItem, page, setPopUp, selectedProduct }) => {
  const firstLayer = useRef();
  const secondLayer = useRef();
  const bigTitle = useRef();
  const pillMaterial = useRef();
  const pillColor = useRef();
  const pillWidth = useRef();
  const pillHeight = useRef();
  const pillDepth = useRef();
  const pillWeight = useRef();
  const action = useRef();

  const bigTitleValue = (()=>{
    if (activeItem !== "") {
        return DATA.home.filter(el=>parseInt(el.id) === (parseInt(activeItem) + ((page - 1) * 3)))[0].title.toUpperCase();
    } else {
        const temp = (localStorage.getItem("bigTitle") === null) ? "" : localStorage.getItem("bigTitle");
        localStorage.removeItem("bigTitle");
        return temp.toUpperCase();
    }
  })();

  const pillMaterialValue =(()=>{
    if (activeItem !== "") {
        return DATA.home.filter(el=>parseInt(el.id) === (parseInt(activeItem) + ((page - 1) * 3)))[0].material.toUpperCase();
    } else {
        const temp = (localStorage.getItem("pillMaterial") === null) ? "" : localStorage.getItem("pillMaterial");
        localStorage.removeItem("pillMaterial");
        return temp.toUpperCase();
    }
  })();
  
  const pillColorValue = (()=>{
    if (activeItem !== "") {
        return DATA.home.filter(el=>parseInt(el.id) === (parseInt(activeItem) + ((page - 1) * 3)))[0].color.toUpperCase();
    } else {
        const temp = (localStorage.getItem("pillColor") === null) ? "" : localStorage.getItem("pillColor"); 
        localStorage.removeItem("pillColor");
        return temp.toUpperCase();
    }
  })();
  
  const pillWidthValue = (()=>{
    if (activeItem !== "") {
        return DATA.home.filter(el=>parseInt(el.id) === (parseInt(activeItem) + ((page - 1) * 3)))[0].width.toUpperCase();
    } else {
        const temp = (localStorage.getItem("pillWidth") === null) ? "" : localStorage.getItem("pillWidth"); 
        localStorage.removeItem("pillWidth");
        return temp.toUpperCase();
    }
  })();
  
  const pillHeightValue = (()=>{
    if (activeItem !== "") {
        return DATA.home.filter(el=>parseInt(el.id) === (parseInt(activeItem) + ((page - 1) * 3)))[0].height.toUpperCase();
    } else {
        const temp = (localStorage.getItem("pillHeight") === null) ? "" : localStorage.getItem("pillHeight"); 
        localStorage.removeItem("pillHeight");
        return temp.toUpperCase();
    }
  })();
  
  const pillDepthValue = (()=>{
    if (activeItem !== "") {
        return DATA.home.filter(el=>parseInt(el.id) === (parseInt(activeItem) + ((page - 1) * 3)))[0].depth.toUpperCase();
    } else {
        const temp = (localStorage.getItem("pillDepth") === null) ? "" : localStorage.getItem("pillDepth");
        localStorage.removeItem("pillDepth"); 
        return temp.toUpperCase();
    }
  })();
  
  const pillWeightValue = (()=>{
    if (activeItem !== "") {
        return DATA.home.filter(el=>parseInt(el.id) === (parseInt(activeItem) + ((page - 1) * 3)))[0].weight.toUpperCase();
    } else {
        const temp = (localStorage.getItem("pillWeight") === null) ? "" : localStorage.getItem("pillWeight"); 
        localStorage.removeItem("pillWeight");
        return temp.toUpperCase();
    }
  })();

  useEffect(()=>{
    if(activeItem !== "") {
        secondLayer.current.style.opacity = 0;
        setTimeout(()=>{
            secondLayer.current.style.zIndex = "-1";
            setTimeout(()=>{
                bigTitle.current.classList.add("show");
                pillMaterial.current.classList.add("show");
                pillColor.current.classList.add("show");
                pillWidth.current.classList.add("show");
                pillHeight.current.classList.add("show");
                pillDepth.current.classList.add("show");
                pillWeight.current.classList.add("show");
                action.current.classList.add("show");
            }, 10);
        }, 400);
        localStorage.setItem("bigTitle", bigTitleValue);
        localStorage.setItem("pillMaterial", pillMaterialValue);
        localStorage.setItem("pillColor", pillColorValue);
        localStorage.setItem("pillWidth", pillWidthValue);
        localStorage.setItem("pillHeight", pillHeightValue);
        localStorage.setItem("pillDepth", pillDepthValue);
        localStorage.setItem("pillWeight", pillWeightValue);
    } else {
        bigTitle.current.classList.remove("show");
        pillMaterial.current.classList.remove("show");
        pillColor.current.classList.remove("show");
        pillWidth.current.classList.remove("show");
        pillHeight.current.classList.remove("show");
        pillDepth.current.classList.remove("show");
        pillWeight.current.classList.remove("show");
        action.current.classList.remove("show");
        setTimeout(()=>{
            secondLayer.current.style.zIndex = "initial";
            setTimeout(()=>{
                secondLayer.current.style.opacity = 1;
            }, 10);
        }, 400);
    }
  });

  const order = ()=>{
    setPopUp(true);
  };

  return (
    <>
    <div ref={firstLayer} className="details">
        <div ref={bigTitle} className="big-title">
            {bigTitleValue}
        </div>
        <div ref={pillMaterial} className="pill-material">
            <p className="pill-header">
                Material
            </p>
            <p className="pill-subheader">
                {pillMaterialValue}
            </p>
        </div>
        <div ref={pillColor} className="pill-color">
            <p className="pill-header">
                Color
            </p>
            <p className="pill-subheader">
                {pillColorValue}
            </p>
        </div>
        <div ref={pillWidth} className="pill-width">
            <p className="pill-header">
                Width
            </p>
            <p className="pill-subheader">
                {pillWidthValue}
            </p>
        </div>
        <div ref={pillHeight} className="pill-height">
            <p className="pill-header">
                Height
            </p>
            <p className="pill-subheader">
                {pillHeightValue}
            </p>
        </div>
        <div ref={pillDepth} className="pill-depth">
            <p className="pill-header">
                Depth
            </p>
            <p className="pill-subheader">
                {pillDepthValue}
            </p>
        </div>
        <div ref={pillWeight} className="pill-weight">
            <p className="pill-header">
                Weight
            </p>
            <p className="pill-subheader">
                {pillWeightValue}
            </p>
        </div>
        <div ref={action} onClick={order} className="action">
            Pre Order
        </div>
    </div>
    <div ref={secondLayer} className="layer">
        <span className="header">Our realization</span>
        <span className="subheader" onClick={()=>{setPopUp(true)}}>Pre order</span>
    </div>
    </>
  )
}

export default HeroTextBlock;
