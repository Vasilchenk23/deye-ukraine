const WhyUs = () => {
  return (
    <div className="container" id="why-us">
      <h2 className="title">Чому працюють з нами</h2>
      <div className="blocks">
        <div className="block">
          <div className="icon">✅</div>
          <h3 className="block-title">Гарантія 12 місяців</h3>
          <p className="block-description">Ми надаємо гарантію якості на всі наші товари.</p>
        </div>
        <div className="block">
          <div className="icon"> 🇺🇦</div>
          <h3 className="block-title">В наявності в Україні</h3>
          <p className="block-description">Широкий асортимент товарів у постійній наявності.</p>
        </div>
        <div className="block">
          <div className="icon">💡</div>
          <h3 className="block-title">Маємо власний досвід</h3>
          <p className="block-description">Наша велика компанія PromDesign</p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
