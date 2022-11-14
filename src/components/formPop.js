import { useState, useEffect, useRef } from 'react';
import { DATA } from '../DATA';

const FormPop = ({ active, toggleActive }) => {

    const orderForm = useRef();
    const name = useRef();
    const contact = useRef();
    const product = useRef();
    const message = useRef();

    const [communicate, setCommunicate] = useState({
        text: "",
        type: ""
    });

    const send = ()=>{
        const nameValue = name.current.value;
        const contactValue = contact.current.value;
        const productValue = product.current.value;
        const messageValue = message.current.value;
        if (nameValue === "") {
            setCommunicate({
                text: "Name field is required",
                type: "error"
            });
            return;
        }
        if (contactValue === "") {
            setCommunicate({
                text: "Contact field is required",
                type: "error"
            });
            return;
        }
        if ((messageValue === "")&&(productValue === "Not related to the product")) {
            setCommunicate({
                text: "Message or Product field is required",
                type: "error"
            });
            return;
        }
        setCommunicate({
            text: "Message send succesfully",
            type: "ok"
        });
        setTimeout(()=>{
            toggleActive(false);
        }, 2000);
    }

    const close = ()=>{
        toggleActive(false);
        setTimeout(()=>{
            name.current.value = "";
            contact.current.value = "";
            product.current.value = "Not related to the product";
            message.current.value = "";
            setCommunicate({
                text: "",
                type: ""
            });
        }, 300);
    }

    useEffect(()=>{
        if (active) {
            orderForm.current.style.zIndex = 2;
            orderForm.current.classList.add("show");
            if (localStorage.getItem("bigTitle") !== null) {
                product.current.value = localStorage.getItem("bigTitle")
            }
        } else {
            orderForm.current.classList.remove("show");
            setTimeout(()=>{
                orderForm.current.style.zIndex = -1;
            }, 300); 
        }
    });

  return (
    <div ref={orderForm} className="pop-up-order-form">
        <div className="container">
            <input ref={name} type="text" placeholder="Name" />
            <input ref={contact} type="text" placeholder="Contact (e-mail or phone)" />
            <select ref={product}>
                {
                    DATA.home.map((el, ind)=><option key={ind} value={el.title.toUpperCase()}>{el.title.toUpperCase()}</option>)
                }
               <option selected="selected">Not related to the product</option>
            </select>
            <textarea ref={message} placeholder="Message" ></textarea>
            <div className="buttons">
                <button onClick={send}>Send</button>
                <button onClick={close}>Cancel</button>
            </div>
        </div>
    <div className={"pop-up " + ((communicate.type === "error") ? "error" : "") + " " + ((communicate.type === "ok") ? "info" : "")} style={{ opacity: (communicate.text !== "") ? 1 : 0 }}>
        {communicate.text}
    </div>
    </div>
  )
}

export default FormPop;
