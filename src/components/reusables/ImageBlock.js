
function ImageBlock ({image, height}) {
    return (
        <div className="bg-purple ring-4 ring-aqua rounded-md my-5" style={{ height: height }}>
            <img src={image} className="rounded-md w-full h-full object-cover"></img>
        </div>
    )
}

export default ImageBlock;