import { useEffect, useState } from "react";

function Navigator() {
  const [keyword, setKeyword] = useState("");
  function HandleSubmit(event) {
    event.preventdefuit();
  }
  function HandleKeyword(event) {
    useEffect(() => {
      if(keyword === "") {
        alert("검색어를 입력하십시오.");
        return
      }  
      setKeyword(event.target.value);
    },[keyword])
  }
  return(
    <form onSubmit={HandleSubmit}>
      <input type="search" onChange={HandleKeyword}/>
      <button type="submit">🔍</button>
    </form>
  );
}

export default Navigator;