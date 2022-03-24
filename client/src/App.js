import { useEffect, useState } from "react";

// components
import Header from "./components/header/Header";
import MainBody from "./components/mainBody/MainBody";
import Login from "./components/login/Login";

// Redux
import { useDispatch } from "react-redux";
import { getComments } from "./features/commentSlice";

const App = () => {
  const [more, setMore] = useState(true);
  const user = false;

  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(getComments());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <div className="app" style={{ overflowX: "hidden" }}>
      {user ? (
        <>
          <Header setMore={setMore} more={more} />
          <MainBody more={more} />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
