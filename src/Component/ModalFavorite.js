import Container from "./Container"

export default function ModalFavorite({
    favorite,
    setFavorite,
}) {
    if (!favorite) return null
    return (
        <div>
            <div className=" bg-black opacity-50 h-screen w-full fixed"></div>
            <div className=" absolute flex justify-center items-center h-screen w-full">
                <div className=" fixed">
                    <Container>
                        <div className=" w-full flex justify-end">
                            <button onClick={() => setFavorite(false)} className=' font-bold text-white bg-red-600 rounded-full w-7 h-7 mb-2'>X</button>
                        </div>
                        <div className=" bg-cyan-800 w-full h-[700px] rounded-3xl">
                            <h1 className=" p-4 text-5xl text-white">Your Favorite</h1>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
}