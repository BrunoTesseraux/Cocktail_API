import "./CocktailDetails.scss";

const CocktailDetails = () => {
  return (
    <>
      <div class="card">
        <div class="imgBox">
          <h2 class="bark">Cocktailname</h2>
          <img src="Bild" />
        </div>
        <div class="details">
          <h4>
            ingredient1 <span>measure1</span>
          </h4>
          <h4>
            ingredient2 <span>measure2</span>
          </h4>
          <h4>
            ingredient3 <span>measure3</span>
          </h4>
          <h4>
            ingredient4 <span>measure4</span>
          </h4>
          <h4>
            ingredient5 <span>measure5</span>
          </h4>
          <h4>
            ingredient6 <span>measure6</span>
          </h4>
          <h4>
            ingredient7 <span>measure7</span>
          </h4>
          <p>Instructions</p>
          {/* <p class="text-right">Happy Birthday, papa!</p>
          <p class="text-right">♥Sarah</p> */}
        </div>
      </div>
    </>
  );
};

export default CocktailDetails;
