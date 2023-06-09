import Card from "./Bootstrap/Card";
import Container from "./Bootstrap/Container";

const Home = () => {
  return (
    <div className="Home">
      <Container fluid={true}>
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 AppHeading text-center pt-2 pb-4">
              GitHub ReadMe: Elevating Your Projects &amp; Profile to New
              Heights!
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 col-xl-3">
            <Card Header="Available Components" TextHeader={true}>
              <p className="lead AppHeader">
                Let&rsquo;s display all the available customisations here. Do we
                need this lead text? 🤔
              </p>
              <ul>
                {[
                  "They are supposed to be draggable and extendable.",
                  "This area should not be touched once it is built.",
                  "An example of how we can map through is here.",
                  "Mostly this array will be an array of objects.",
                  "Each object should be having a configuration of the component.",
                  "New developers should be able to enhance the product by creating new components.",
                  "New components should be automatically be listed here with minimal or no code change."
                ].map((li, key) => (
                  <li key={key}>{li}</li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="col-12 col-md-7 col-lg-8 col-xl-9">
            <Card Header="Preview" TextHeader={true}>
              <p className="lead AppHeader">
                Here&rsquo;s where the preview of the ReadMe comes up. 💪🏻
              </p>
              <ul>
                <li>
                  We should ask the user, if this customisation is for Profile
                  or Project.
                </li>
                <li>
                  We should be able to show the different customisations on the
                  left.
                </li>
                <li>
                  We should show a tab view to switch between Design / Preview
                  mode.
                </li>
                <li>Should we choose a better title for this right panel?</li>
                <li>
                  Until we have an amazing app ready, keep updating the
                  screenshot on the ReadMe.
                </li>
                <li>
                  Most of the designs and layout are in this inital{" "}
                  <a
                    href="https://github.com/praveenscience/Praveen-React-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Praveen&rsquo;s Modified CRA project
                  </a>
                  . If you are planning to add new, kindly seek approval.
                </li>
                <li>
                  If in doubt, quickly ask Praveen or the mentors. It
                  doesn&rsquo;t harm, instead of making a mistake and going
                  through.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
