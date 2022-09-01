export default function ModalDetail({
    open,
    onClose,
    item,
    favorite,
    FavComic,
}) {
    if (!open) return null
    return (
        <div className=''>
            <div className=" h-screen w-full bg-black opacity-50 fixed"></div>
            <div className=" absolute h-screen w-full flex justify-center items-center">
                <div className=" fixed">
                    <button onClick={() => onClose(false)} className=" font-bold text-white bg-red-600 rounded-full w-7 h-7 mb-2">X</button>
                    <div className=" bg-cyan-900 rounded-3xl">
                        <div>
                            <div className=" w-full flex justify-center">
                                <img className=' w-[400px] rounded-3xl p-3' src={item.cover} />
                            </div>
                            <div className=" p-3 w-[400px]">
                                <h1 className=" font-bold text-white text-2xl">Title : {item.title}</h1>
                                <p className=" text-md">Slug : {item.slug}</p>
                            </div>
                            <div className=" p-3 w-full flex justify-end">
                                <button onClick={() => FavComic(!favorite)} className={favorite === true ? " bg-red-600 rounded-3xl px-3 font-bold text-white" : " bg-green-600 rounded-3xl px-3 font-bold text-white"}> {favorite === true ? "Delete Favorite" : "+ Favorite"} </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}