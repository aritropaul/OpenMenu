import Item from './fooditem'

export default function Category({title, items}) {

    const itemsList = items.map((item, index) => {
        return <Item key={index} img={item.img} title={item.title} desc={item.desc} price={item.price}></Item>
    })

    return(
        <div>
            <h1 className="text-4xl dark:text-gray-300 font-bold text-left group flex whitespace-pre-wrap px-8 lg:px-24 mt-8 mb-4 ">
                {title}
            </h1>
            <div className="items-start justify-center w-full grid grid-cols-1 grid-flow-row gap-4 lg:grid-cols-3 px-8 lg:px-20">
                {itemsList}
            </div>
        </div>
    )
}