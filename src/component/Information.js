function Information({id, name, scientific, img, description,cycle, water, flowers, flowersSeason, fruits, edibleFruit}) {
  return (
    <div>
      <div><img src={img} alt={name} /></div>
      <h1>{name}</h1>
      <p>{scientific}</p>
      <span>{cycle}</span>
      <span>{water}</span>
      <span>{flowers}</span>
      <span>{flowersSeason}</span>
      <span>{fruits}</span>
      <span>{edibleFruit}</span>
      <p>{description}</p>
    </div>
  );
}

export default Information;