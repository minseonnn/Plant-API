import styled from "styled-components";

function Information({data}) {
  return (
    <Wrpper>
      <div>
        <PlantImg src={data.default_image ? data.default_image.original_url : null} alt={data.common_name} />
      </div>
      <PlantName>{data.common_name}</PlantName>
      <Scientific>{data.scientific_name}</Scientific>
      <Explanation>{data.cycle}</Explanation>
      <Explanation>{data.watering}</Explanation>
      <Explanation>{data.flowers ? "It's blooming" : "It doesn't bloom"}</Explanation>
      <Explanation>{data.flowering_season ? data.flowering_season : "When will flowers bloom?🌷"}</Explanation>
      <Explanation>{data.fruits ? data.fruits : "Do you know if it bears fruit?🍎"}</Explanation>
      <Explanation>{data.edible_fruit? "edible fruit🙆‍♀️" : "non-edible fruit🙅‍♀️"}</Explanation>
      <Description>{data.description}</Description>
    </Wrpper>
  );
}

const Wrpper = styled.div`
  width : 100%;
  padding: 50px
`;

const PlantImg = styled.img`
width:100%
`;

const PlantName = styled.h1`
margin: 30px 0;
}
`;

const Scientific = styled.p `
margin: 20px 0
`;

const Description = styled.p`
margin :20px 0
`
const Explanation = styled.span`
margin-right : 20px
`;

export default Information;