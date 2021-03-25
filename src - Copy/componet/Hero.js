import ButtonContainer from "./ButtonContainer";
function Hero() {
    const style = {
        background: "red",
        height: 20,
        width: 120,
        
        color: "green"
    }
  return (
    <header>
      <div className="hero">
        <h2>Books shop</h2>
        <h4>I Sell All Kinds of Books At Affortable Priceses</h4>
        <ButtonContainer style={style} title="book nown" />
      </div>
    </header>
  );
}

export default Hero;
