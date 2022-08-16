export default function CardGrid({ api, onOpen, grid }) {
    return (
        <div className="">
            <div onClick={() => onOpen(true)} className=" bg-lime-700 rounded-lg flex w-[400px]">
                <img width={100} className=' rounded-lg' src={api.cover} />
                <div className=" mt-2 ml-2 mr-2">
                    <h1 className=" text-white font-bold">Title : {api.title}</h1>
                    <p>Slug : {api.slug}</p>
                </div>
            </div>
        </div>
    )
}