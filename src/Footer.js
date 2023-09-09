import React from "react";
import "./footer.css";

const Footer = ({ allItems }) => {
  let overAllItems = allItems.length;
  let allpacked = allItems.filter((value) => value.packed).length;
  let percentage = Math.round((allpacked / overAllItems) * 100);
  return (
    <div className="foot-cont">
      {percentage === 100 ? (
        <p>you got everytnig ready to go 🏃🏻</p>
      ) : (
        <p>{`you have ${overAllItems} items on your list,and you already packed ${allpacked}(${percentage}%)`}</p>
      )}
    </div>
  );
};

export default Footer;
