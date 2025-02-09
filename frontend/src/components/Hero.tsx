const Hero = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="hero-overlay">
        <h1 className="text-5xl font-bold">Discover Amazing Deals!</h1>
        <p className="mt-2 text-lg">Get the best products at unbeatable prices.</p>
        <button className="btn-secondary mt-4">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;