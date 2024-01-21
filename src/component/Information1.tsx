interface DataType {
  common_name:string,
  cycle : string,
  id : number,
  cientific_name: string[],
  watering:string,
  default_image: {original_url:string},
  flowers : boolean,
  flowering_season :string,
  fruits: boolean,
  edible_fruit:boolean,
  description:string,
  scientific_name :string[]
}
const  Information : React.FC <{ data : DataType }> = ({data}) => {
  return (
    <div>
      <div><img src={data.default_image ? data.default_image.original_url : undefined} alt={data.common_name} /></div>
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