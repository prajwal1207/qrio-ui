
interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="border-2 border-purple-400 relative group w-[300px] h-[350px] rounded-xl overflow-hidden shadow-lg bg-card-gradient">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition duration-500"></div>

      <div className="absolute inset-0 bg-black bg-opacity-80 p-6 flex flex-col justify-start items-center text-center transition-transform duration-500 translate-y-[82%] group-hover:translate-y-28">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

