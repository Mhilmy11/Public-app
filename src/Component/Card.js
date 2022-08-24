export default function Card({ onOpen, api, i }) {
    return (
        <div className="">
            <div key={i} onClick={() => onOpen(true)} className=" border-2 border-slate-800 rounded-3xl flex">
                <img width={150} className=' rounded-l-3xl' src={api.cover} />
                <div className=" mt-2 ml-2 mr-2">
                    <h1 className=" text-white font-bold">Title : {api.title}</h1>
                    <p>Slug : {api.slug}</p>
                </div>
            </div>
        </div>
    )
}