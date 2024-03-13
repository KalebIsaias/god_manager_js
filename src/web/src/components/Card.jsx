import Image from "next/image";

export default function Card({ title, description, image }) {
  return (
    <div className="max-w-sm max-h-[500px] rounded overflow-hidden shadow-lg bg-black border-white border-4 m-2 flex flex-col">
      <div className="relative h-[50%] overflow-hidden">
        <Image
          className="w-full object-cover object-center"
          src={image}
          alt={title}
          width={800}
          height={250}
        />
      </div>
      <div className="px-6 py-4 bg-white h-[50%]">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
