import Image from "next/image"

export default async function Card({ id, name, image, types}) {
    return (
        <div className="border-2 border-white m-4 w-[225px] h-[281.04px] cardShadow rounded-md">
            <div className="mx-[3px]">
                <Image src={image} alt={`${name} Image`} width={215} height={215} loading="eager" />
                <h2 className="text-[8px]">{id}</h2>
                <h2 className="text-xl capitalize">{name}</h2>
            </div>
        </div>
    )
}