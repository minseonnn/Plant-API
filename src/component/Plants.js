import {Link} from "react-router-dom";
//import style from "./Plant.module.css";

function Plants({ id, thumbnail, name, cycle }) {
  return (
    <div className="">
      <Link to={`/plant/${id}`}>
        <img src={thumbnail} alt={name} />
      </Link>
      <h1 className="">
        <Link to={`/plant/${id}`}>
          {name}
        </Link>
      </h1>
      <p>{cycle}</p>
    </div>

  );
}

export default Plants;