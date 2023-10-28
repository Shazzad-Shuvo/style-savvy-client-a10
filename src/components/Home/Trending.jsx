

const Trending = () => {
    return (
        <div className="max-w-6xl mx-5 lg:mx-auto">
            <h2 className="text-4xl font-bold text-center mt-20 mb-10 dark:text-slate-200">Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img src={'https://i.ibb.co/pdXrq3c/adidas.jpg'} alt="" />
                <img src={'https://i.ibb.co/xfkfxQQ/air-jordan.jpg'} alt="" />
                <img src={'https://i.ibb.co/rHtTH8Y/gucci-1.jpg'} alt="" />
            </div>
        </div>
    );
};

export default Trending;