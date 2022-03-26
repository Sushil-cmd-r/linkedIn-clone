import { useEffect, useState } from "react";

// components
import Header from "./components/header/Header";
import MainBody from "./components/mainBody/MainBody";
import Login from "./components/login/Login";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "./features/commentSlice";
import { checkAuth } from "./features/userSlice";

const App = () => {
  const [more, setMore] = useState(true);
  let user = useSelector((state) => state.users.user);
  let error = useSelector((state) => state.users.err);
  const dispatch = useDispatch();
  console.log(error);

  useEffect(() => {
    const auth = () => {
      dispatch(checkAuth());
    };
    auth();
  }, [dispatch]);

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
        <Login error={error} />
      )}
    </div>
  );
};

export default App;
