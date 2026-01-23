import { useEffect } from "react";

const RestaurantMenu = ()=>{
    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu =  async ()=>{
        console.log("useEffect called")
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5456897&lng=77.3882686&restaurantId=999637&catalog_qa=undefined&query=Biryani&submitAction=ENTER")
        const json = await data.json();

        console.log(json);
    }
    return(
        <div className="menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;