const CocktailList = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(function (polaroid) {
      var randomRotation = Math.floor(Math.random() * 11) - 5; // Zufälliger Winkel zwischen -5 und 5 Grad
      var randomXOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px horizontal
      var randomYOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px vertikal

      var transformValue =
        "rotate(" +
        randomRotation +
        "deg) translate(" +
        randomXOffset +
        "px, " +
        randomYOffset +
        "px)";

      polaroid.style.transform = transformValue;
    });
  });

  return (
    <section>
      <div className="polaroid">
        <div className="black"></div>
      </div>
      <div className="polaroid">
        <div className="black"></div>
      </div>
      <div className="polaroid">
        <div className="black"></div>
      </div>
      <div className="polaroid">
        <div className="black"></div>
      </div>
      <div className="polaroid">
        <div className="black"></div>
      </div>
      <div className="polaroid">
        <div className="black"></div>
      </div>
      <div className="polaroid">
        <div className="black"></div>
      </div>
      <div className="polaroid">
        <div className="black"></div>
      </div>
    </section>
  );
};

export default CocktailList;
