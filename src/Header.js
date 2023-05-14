import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useSelector} from "react-redux";
function Header() {
  let count=useSelector(state=>state.cart);
  count=count.totalItemsInBucket;
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      </div>
      <div className="header__option">
      <span className="header__optionLineOne">Returns</span>
      <span className="header__optionLineTwo">& Orders</span>
    </div>
    <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
            {count}
            </span>
          </div>
    </div>
  );
}

export default Header;
