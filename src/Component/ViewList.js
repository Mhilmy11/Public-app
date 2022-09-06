export default function ViewList({ ListView, list }) {
    return (
        <div className=" text-xs mb-2 w-full flex justify-end">
            <h6 className=" mr-2">View : </h6>
            <div className=" text-gray-400">
                <button onClick={() => ListView(!list)}>
                    {list === true ? "Grid" : "List"}
                </button>
            </div>
        </div>
    )
}