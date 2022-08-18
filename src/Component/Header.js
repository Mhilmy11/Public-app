import Container from "./Container";

export default function Header({ search, Search, setSearch, onOpen }) {
    return (
        <div className=" w-full">
            <Container>
                <div className=" pt-6  pb-2 flex justify-between">
                    <div className=" flex items-center rounded-3xl border-4 border-zinc-800">
                        <button onClick={() => onOpen(true)} className=" text-white text-xl font-bold px-3">Favorite</button>
                    </div>
                    <div className=" border p-2 rounded-full border-zinc-800 bg-sky-900">
                        <input
                            placeholder='Search Here...'
                            onChange={(e) => setSearch(e.target.value)}
                            className=" rounded-xl px-3"
                        />
                        <button className=" ml-5 border rounded-xl bg-green-500 px-2 border-zinc-800" onClick={() => Search(search)}>Search</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}