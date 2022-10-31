import Image from "next/image"
import Link from "next/link"

export default async function Card({ id, name, image, types}) {
    return (
        <Link href={`/${id}`} className="m-4 w-[225px] h-[281.04px] cardShadow rounded-md">
            <div className="mx-[3px]">
                <Image src={image} alt={`${name} Image`} width={215} height={215} loading="eager" placeholder="blue" className="rounded-sm"/>
                <h2 className="text-[8px]">{id}</h2>
                <h2 className="text-xl capitalize">{name}</h2>
            </div>
        </Link>
    )
}