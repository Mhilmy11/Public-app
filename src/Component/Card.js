export default function Card({onOpen, api}) {
    return(
        <div onClick={() => onOpen(true)} className=" flex mb-2">
            <div className=" bg-sky-500 rounded-md flex">
                <img width={100} src={api.cover} />
                <div className=" mt-2 ml-2 mr-2">
                    <h1>Title : {api.title}</h1>
                    <p>Slug : {api.slug}</p>
                </div>
            </div>
        </div>
    )
}