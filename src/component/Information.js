function Information({data}) {
  return (
    <div>
      <div><img src={data.default_image ? data.default_image.original_url : null} alt={data.common_name} /></div>
      <h1>{data.common_name}</h1>
      <p>{data.scientific_name}</p>
      <span>{data.cycle}</span>
      <span>{data.watering}</span>
      <span>{data.flowers ? "It's blooming" : "It doesn't bloom"}</span>
      <span>{data.flowering_season ? data.flowering_season : null}</span>
      <span>{data.fruits ? data.fruits : null}</span>
      <span>{data.edible_fruit? "edible fruit" : "non-edible fruit"}</span>
      <p>{data.description}</p>
    </div>
  );
}

export default Information;