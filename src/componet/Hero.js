import ButtonContainer from "./ButtonContainer";
function Hero() {
    const style = {
        background: "red",
        height: 20,
        width: 120,
        
        color: "green"
    }
  return (
    <header style={{
      background: "url(./image/th.jpg)",
      backgroundPosition: "center center",
      backgroundRepeat:"no-repeat",
      height:"300px"
    
    }}>
      <div className="hero">
        <h2 style={{color:"red"}}>Books shop</h2>
        <h4 style={{color:"red"}}>I Sell All Kinds of Books At Affortable Priceses</h4>
        <ButtonContainer style={style} title="book nown" />
      </div>
    </header>
  );
}

export default Hero;
