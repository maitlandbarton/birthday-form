
function ImageBlock ({image, height}) {
    return (
        <div className={`bg-purple ring-4 ring-aqua rounded-md h-${height} my-5`}>
            <img src={image} className="rounded-md w-full h-full object-cover"></img>
        </div>
    )
}

export default ImageBlock;