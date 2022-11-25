
function takeitems () {

    let itemList = [];

    // for (let i = 0; i < localStorage.lenght; i++){
    // let key = localStorage.key(i);
    // itemList.push(JSON.parse(localStorage.getItem(key)));
    // console.log(itemList, key, "hola",);
    // };
    
    
    return itemList
}
function ItemListContainer () {
    let list = takeitems();

    return(
        <>
        <div className="items_in_cart_container">
            {list.map((item) => (
                <div className="item_in_cart">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                </div>
                
            ))}
        </div>
    </>
    )
}

export default ItemListContainer;