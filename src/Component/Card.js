export default function Card({onOpen, api}) {
    return(
        <div className="">
            <div onClick={() => onOpen(true)} className=" bg-cyan-600 rounded-md flex w-[400px]">
                <img width={100} src={api.cover} />
                <div className=" mt-2 ml-2 mr-2">
                    <h1>Title : {api.title}</h1>
                    <p>Slug : {api.slug}</p>
                </div>
            </div>
        </div>
    )
}