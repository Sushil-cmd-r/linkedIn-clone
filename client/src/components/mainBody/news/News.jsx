import "./news.scss";

const News = () => {
  return (
    <div className="news">
      <h4>LinkedIn News</h4>
      <ul>
        <li>
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              border: "2px solid black",
            }}
          ></div>
          <span>
            <h5>Lorem Lorem, ipsum dolor sit amet.</h5>
            <h5 className="newDate">1h ago</h5>
          </span>
        </li>
        <li>
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              border: "2px solid black",
            }}
          ></div>
          <span>
            <h5>Lorem ipsum dolor sit amet.</h5>
            <h5 className="newDate">1h ago</h5>
          </span>
        </li>
        <li>
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              border: "2px solid black",
            }}
          ></div>
          <span>
            <h5>Lorem Lorem, ipsum dolor sit amet.</h5>
            <h5 className="newDate">1h ago</h5>
          </span>
        </li>
        <li>
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              border: "2px solid black",
            }}
          ></div>
          <span>
            <h5>Lorem ipsum dolor sit amet. Lorem, ipsum</h5>
            <h5 className="newDate">1h ago</h5>
          </span>
        </li>
        <li>
          <div
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              border: "2px solid black",
            }}
          ></div>
          <span>
            <h5>Lorem ipsum amet.</h5>
            <h5 className="newDate">1h ago</h5>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default News;
