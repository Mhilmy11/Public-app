import Container from "./Container";

export default function Header({search, Search, setSearch}) {
    return(
        <div className=" bg-cyan-600 w-full mb-1">
            <Container>
                <div className=" py-6 flex justify-end">    
                    <div>
                        <input
                            placeholder='Search Here...'  
                            onChange={(e) => setSearch(e.target.value)}
                            />
                        <button className=" ml-5" onClick={() => Search(search)}>Search</button>
                    </div>                  
                </div>
            </Container>
        </div>
    )
}