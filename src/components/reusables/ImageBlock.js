
function ImageBlock ({image}) {
    return (
        <div className="bg-purple ring-4 ring-aqua rounded-md h-64 my-5">
            <img src={image} className="rounded-md w-full h-full object-cover"></img>
        </div>
    )
}

export default ImageBlock;