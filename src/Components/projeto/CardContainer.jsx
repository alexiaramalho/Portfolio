export default function CardContainer({titulo, children}) {
    return(
        <>
        <div className="">
            <h1>{titulo}</h1>
            <div className=" grid gap-5 w-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {children}
            </div>
        </div>
        </>
    )
}