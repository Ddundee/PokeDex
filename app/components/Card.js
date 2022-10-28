import Image from "next/image"

export default async function Card(props) {
    return (
        <div className="border-2 border-white m-4 w-[225px] h-[281.04px] cardShadow rounded-md">
            <div className="mx-[3px]">
                <img src={props.image} width="215px" />
                <h2 className="text-[8px]">{props.id}</h2>
                <h2 className="text-xl capitalize">{props.name}</h2>
            </div>
        </div>
    )
}