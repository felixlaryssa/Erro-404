import "./styles.css";

export default function Btns() {
  return (
    <div className="containerButtons">
      <div className="button" id='btn-crono'>
        <img
          src="https://s3-alpha-sig.figma.com/img/2aad/3cac/6241014c208c7f4bc16da5fa9301c712?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lopw6k5712M~VVsi48I09~6GOCsp50PQOxcbAHVvkNS1Ke1pPuapWett3A1LlXG2qsJ4Sv649K7gWRZgJfC-yRbHGm-yOIUmFpYnnbOuu9WejprPpFJqhnKKQT3l29bp-0IJxEQ~SYxZHaGQilcSev0ndlmJSUi9tkjo1iNs97x8e4Tj3ddXh2Y1AqlUIpQMpqMyLChC1mR9K90TSi5jSje6IoanSgpUbUJK4ugtGQAdfxuwnUosLsPz6MXQ3x21Tk4WSt93SbPf1-vwSlEd9cIiKb5iecoEFpPwnRQf9dx-VRbLd87W19ZG-7e8PxAoptwRKzkqbS0sxJhJLsmncQ__"
          alt="Orcronologia"
          className="buttonImg"
        />
        <h2 className="buttonText">Orcronologia</h2>
      </div>
      <div className="button" id='btn-drive'>
        <img
          src="https://s3-alpha-sig.figma.com/img/b88c/2a6d/d0c3965dd591f7691fd06e8292c76433?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dat33BN47dM73Sc0KUQoeeY-BHO-vRLZPV4oBgDPR8xQjO1YhiVlYrS4ki6UkVZfNQ23dP0To2KrMU2CHuOD1IoK5PSB9CkA8gJ7EVawrz--gZLB3iVfBFW9JnjerDUKnd8JsfRvSS9YxVajbAL4TSF9BEeZeBqsOhptFOvXKJomMbKvXXLbG2Lnxi2FEdENZGpEvV5JXEATNIhU8qt5UKAZR7Fz5-k~R3yb3JPt1f5EfZD0JpIu4tzWRCeuccaOguD-Dia-Bkes~BTL1p5PB6r96DaO06ocxuv2s300ZewsQfZJ5aTTmp6i4BJLm15mEhua9KmqHDbQnlHF8Jijfw__"
          alt="Google Drive"
          className="buttonImg"
        />
        <h2 className="buttonText">Google Drive</h2>
      </div>
    </div>
  );
}
