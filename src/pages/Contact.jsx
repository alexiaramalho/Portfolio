import ContactMe from "../Components/ContactMe";

function Contato() {
    return (
        <>
            <div className="flex justify-center sm:justify-left align-center pt-5">
                <h1 className="text-2xl sm:text-4xl font-bold uppercase">Contato ☎️</h1>
            </div>
            <div className="border-b-2 border-pink-600 mt-5 "></div>
            <div className=" flex items-center justify-center">
                <ContactMe />
            </div>
        </>
    );
}

export default Contato;