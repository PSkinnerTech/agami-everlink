import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";

function App() {
  const colors = {
    youtube: "red",
    linkedin: "blue",
    github: "black",
  };
  const data = {
    name: "Patrick Skinner",
    image: "https://github.com/pskinnertech.png",
    bio: "",
    links: [
      {
        name: "My opensource github",
        url: "https://github.com/pskinnertech",
        icon: "github",
      },
      {
        name: "Follow me on Twitter",
        url: "https://twitter.com/pskinnertech",
        icon: "twitter",
      },
      {
        name: "Follow me on Linkedin",
        url: "https://linkedin.com/in/patrickaskinner",
        icon: "linkedin",
      },
      {
        name: "Subscribe to me on Youtube ",
        url: "https://www.youtube.com/@PSkinnerTech",
        icon: "youtube",
      },
    ],
  };
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
        <h1 className="p-m-2">{data.name}</h1>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <p>{data.bio}</p>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column">
          {data.links.map((link) => (
            <Button
              className="p-m-2 p-button-outlined"
              style={{ color: colors[link.icon] }}
            >
              <i className={`pi pi-${link.icon} p-px-3`}></i>
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
