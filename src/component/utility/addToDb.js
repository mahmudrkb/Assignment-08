import { toast } from "react-toastify";

const getStoredProduct = () => {
    // read-list
    const storedCartStr = localStorage.getItem('cart-list');
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    else {
        return [];
    }
}

const addToStoredProduct = (id) => {
    const storedCart = getStoredProduct();
    if (storedCart.includes(id)) {
        // already exists. do not add it
        toast.warning( 'already exists in the Cart  ')
    }
    else {
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart-list', storedCartStr);
     
        toast.success('This book is added to your Cart.')
    }
}

const getStoredWish = () => {
    
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWish = (id) => {
    const storedWishList = getStoredWish();
    if (storedWishList.includes(id)) {
        // already exists. do not add it
        toast.warning('already exists in the WishList')
    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast.success('This book is added to your WishList.')
    }
}





const getStoredPrice = () => {

    
    const storedCartPrice = localStorage.getItem('prices');
    if(storedCartPrice){
        const storedPrice = JSON.parse(storedCartPrice);
        return storedPrice;

    }else{
        return[];

    }
 
      
}
   

const addToStoredPrice = (prices) => {
    const storedPrice = getStoredPrice();

    if(storedPrice.includes(prices)){

    }else{
        storedPrice.push(prices);
        const storedCartPrice = JSON.stringify(storedPrice);
        localStorage.setItem('prices', storedCartPrice);
       

    }
    
   
       
}



export { addToStoredProduct, addToStoredWish,addToStoredPrice, getStoredPrice, getStoredProduct,getStoredWish }