export default function Modal({open, onClose, item}) {
    if (!open) return null
    return (
        <div>
            <div className=" h-screen w-full bg-black opacity-25 absolute"></div>
            <div className=" absolute h-screen w-full flex justify-center items-center">
                <div className=" bg-cyan-600 rounded-lg flex">
                    <img width={200} src={item.cover}/>
                    <div className=" mt-2 ml-2 mr-2">
                        <h1>Title : {item.title}</h1>
                        <p>Slug : {item.slug}</p>
                    </div>
                    <button onClick={() => onClose(false)} className=" bg-red-500 p-1">Close</button>
                </div>
            </div> 
        </div>
    )
}