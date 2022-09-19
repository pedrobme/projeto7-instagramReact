export default function FixedTopBar() {
  return (
    <div className="fixed-top-bar">
      <div className="top-bar">
        <div className="left-bar-desktop">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="vertical-line"></div>
          <img src="/assets/logo.png" />
        </div>
        <div className="left-bar-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="middle-bar-desktop">
          <p className="font-search-bar">Pesquisar</p>
        </div>
        <div className="middle-bar-mobile">
          <img src="/assets/logo.png" />
        </div>
        <div className="right-bar-desktop">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
        <div className="right-bar-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
      <div className="horizontal-line"></div>
    </div>
  );
}
