const BigImage = ({ src }) => {
    return (
        <div
            style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            className="w-full h-[450px] lg:h-[560px] overflow-clip saturate-120 bg-zinc-300 center-item textzinc-600"
        >
            {!src && <span className="text-lg">Main New Arrival Image</span>}
        </div>
    );
};

export default BigImage;
