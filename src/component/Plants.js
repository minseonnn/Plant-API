//import {Link} from "react-router-dom";
//import style from "./Plant.module.css";

function Plants({id, thumbnail, name, cycle}) {
  return (
    <div className="">
        <img src={thumbnail} alt={name}/>
      <h1 className="">
          {name}
      </h1>
      <p>{cycle}</p>
    </div>
  );
}

export default Plants;