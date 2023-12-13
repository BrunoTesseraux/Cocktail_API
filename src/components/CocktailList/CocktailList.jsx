const CocktailList = () => {
  const style = () => {
    const polaroids = document.querySelectorAll(".polaroid");

    polaroids.forEach(function (polaroid) {
      const randomRotation = Math.floor(Math.random() * 11) - 5; // Zufälliger Winkel zwischen -5 und 5 Grad
      const randomXOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px horizontal
      const randomYOffset = Math.floor(Math.random() * 21) - 10; // Zufällige Verschiebung zwischen -10px und 10px vertikal

      const transformValue =
        "rotate(" +
        randomRotation +
        "deg) translateX(" +
        randomXOffset +
        "px) translateY(" +
        randomYOffset +
        "px)";

      polaroid.style.transform = transformValue;
    });
  };

  return (
    <section>
      <button onClick={style()}>Style</button>
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
