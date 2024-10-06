import { useState } from "react";
import emailjs from '@emailjs/browser'
import code from '../images/Coding-amico.png'

function ContactMe() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send("service_rhhbb4q","template_lzedt9k", templateParams, "vQYT3et9qKNo1xKkq")
        .then((response) =>{
            console.log("Email enviado", response.status, response.text);
            console.log("nome=", name, "email=", email, "menssagem=", message);
            setName('');
            setEmail('');
            setMessage('');

        }, (err) => {
            console.log("ERRO: ", err)
        })
    }

    return (  
        <>
        <div className="md:container px-5 py-10 bg-slate-800/60 m-4 rounded-2xl grid md:grid-cols-2">
            <div className="gap-6 flex items-center">
                <form className="form flex flex-1 flex-col gap-5" onSubmit={sendEmail}>
                    <input 
                        className="input border border-white bg-transparent rounded-2xl p-2 text-white lg:p-4"
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    <input 
                        className="input border border-white bg-transparent rounded-2xl p-2 text-white lg:p-4"
                        type="text"
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    <input 
                        className="textarea border border-white bg-transparent rounded-2xl p-2 text-white h-44 lg:h-80"
                        placeholder="Digite sua mensagem"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        />             
                    <div className="flex items-center bg-pink-700 text-white justify-center p-2 rounded-2xl lg:mt-4 lg:p-4">
                        <input className="button " type="submit" value="Enviar"/>   
                    </div>
                </form>
                        

            </div>
            
            <div className="mt-5 grid md:mt-0 md:items-center p-5 ">
                <img 
                src={code}
                className="w-full rounded-2xl"
                alt="tela com fundo preto e código em fontes coloridas" />
            </div>
        </div>
        </>

    );
}

export default ContactMe;