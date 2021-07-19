export default function Item({title, img, desc, price}) {
    return( 
        <div className="bg-gray-800 rounded-lg flex flex-col items-start px-8 py-4 w-full relative mb-8 lg:mx-2 lg:h-80">
            <img src={img} alt="food-item" className="rounded-lg object-cover h-36 w-full my-4" />
            <div className="flex flex-col items-start justify-start">
                <h3 className="font-semibold text-lg dark:text-gray-300">{title}</h3>
                <span className="dark:text-gray-500">{desc}</span>
            </div>
            <div className="flex flex-col items-start justify-start">
                <span className="rounded-lg bg-red-500 dark:text-gray-50 font-medium text-sm absolute top-0 right-0 mt-10 mr-10 p-1">{price}</span>
            </div>
        </div>
    )
}