import Marquee from "react-fast-marquee";


const Sponsor = () => {
    return (
        <div className="mt-20">
            <h2 className="text-4xl font-semibold text-center mb-10">Sponsors On Board</h2>
            <Marquee gradient={true} gradientWidth={300} autoFill={true} >
                <img className="w-40 mx-10" src={'https://i.ibb.co/QXbZsGM/Gucci.jpg'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/nbw6qYN/nike-logo-49343.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/thf4s0r/adidas.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/pdPqLPt/h-m.png'} alt="" />
                <img className="w-40 mx-10" src={'https://i.ibb.co/NVJWvQ4/lv.png'} alt="" />
            </Marquee>

        </div>
    );
};

export default Sponsor;