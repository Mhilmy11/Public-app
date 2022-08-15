import Container from "./Container";

export default function Header({ search, Search, setSearch }) {
    return (
        <div className=" fixed w-full">
            <Container>
                <div className=" py-6 flex justify-end">
                    <div className=" border p-2 rounded-full border-zinc-800 bg-sky-900">
                        <input
                            placeholder='Search Here...'
                            onChange={(e) => setSearch(e.target.value)}
                            className=" rounded-xl px-2"
                        />
                        <button className=" ml-5 border rounded-xl px-1 border-zinc-800" onClick={() => Search(search)}>Search</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}