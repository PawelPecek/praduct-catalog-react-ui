import { useEffect, useRef } from 'react';
import { DATA } from '../DATA';

const HeroItem = ({ isActive, isHide, orderNumber, position, imageList, changeDirectionIndicator}) => {
  const anchor = useRef();

  const orderText = (()=>{
    switch(orderNumber) {
      case 1:
        return "first";
      break;
      case 2:
        return "second";
      break;
      case 3:
        return "third";
      break;
      default:
        throw new Error("Wrong orderNumber prop");
    }
  })();

  const calculateLeft = ind => {
    switch (changeDirectionIndicator) {
      case 1:
        if ((ind + 1) <= position) {
          return 0;
        } else {
          return ((((ind + 1) - position) * 100) + "%");
        }
      break;
      case 0:
        return ((((ind + 1) - position) * 100) + "%");
      break;
      case -1:
        if ((ind + 1) <= position) {
          return 0;
        } else {
          return ((((ind + 1) - position) * 100) + "%");
        }
      break;
    }
  }

useEffect(()=>{
  if(isActive) {
    setTimeout(()=>{
      anchor.current.classList.add("active");
    }, 300)
  } else {
    anchor.current.classList.remove("active");
  }
  if (isHide) {
    anchor.current.classList.add("hide");
  } else {
    setTimeout(()=>{
      anchor.current.classList.remove("hide");
    }, 300);
  }
});

  return (
    <div ref={anchor} className={"hero-item " + orderText}>
      {
        imageList.map((el, ind)=>(
          <div key={ind}
           className="sliderItem"
           style={{
            backgroundImage: ("url(" + el + ")"),
            left: calculateLeft(ind),
            zIndex: ind
          }}>
          </div>
        ))
      }
    </div>
  )
}

export default HeroItem;