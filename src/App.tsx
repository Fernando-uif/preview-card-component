import appStyle from "./sass/components/app.module.scss";

function App() {
  return (
    <section className={`${appStyle["app"]}`}>
      <div className={`${appStyle["app__wrapperImage"]}`}>
        <img
          src="/assets/background-image.jpg"
          srcSet="/assets/background-image-2.jpg 1110w"
          alt="work"
          className={`${appStyle["app__image"]}`}
        />
      </div>
      <div className={`${appStyle["app__wrapperInformation"]}`}>
        <div className={`${appStyle['app__wrapperInformation__desktopInfo']}`}>
          <p className={`${appStyle["app__mainDescription"]}`}>
            Get{" "}
            <span className={`${appStyle["app__mainDescription--text"]}`}>
              insights
            </span>{" "}
            that help your business grow.
          </p>
          <p className={`${appStyle["app__mainDescription__description"]}`}>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>

        <div className={`${appStyle["app__mainDescription__results"]}`}>
          <div className={`${appStyle["app__mainDescription__wrapperInfo"]}`}>
            <span
              className={`${appStyle["app__mainDescription__results--number"]}`}
            >
              10k+
            </span>
            <span className={appStyle["app__mainDescription__results--name"]}>
              companies
            </span>
          </div>
          <div className={`${appStyle["app__mainDescription__wrapperInfo"]}`}>
            <span
              className={`${appStyle["app__mainDescription__results--number"]}`}
            >
              314
            </span>
            <span className={appStyle["app__mainDescription__results--name"]}>
              templates
            </span>
          </div>
          <div className={`${appStyle["app__mainDescription__wrapperInfo"]}`}>
            <span
              className={`${appStyle["app__mainDescription__results--number"]}`}
            >
              12M+
            </span>
            <span className={appStyle["app__mainDescription__results--name"]}>
              queries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
