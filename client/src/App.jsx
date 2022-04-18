import { useEffect, useState } from "react";

// components
import Header from "./components/header/Header";
import MainBody from "./components/mainBody/MainBody";
import Login from "./components/login/Login";
import CreateModal from "./components/modals/CreateModal";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "./features/commentSlice";
import { checkAuth } from "./features/userSlice";

const App = () => {
  const [more, setMore] = useState(true);
  const [modal, setModal] = useState(false);
  const close = () => setModal(false);
  const open = () => setModal(true);

  let user = useSelector((state) => state.users.user);
  let error = useSelector((state) => state.users.err);
  const dispatch = useDispatch();

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
    <div className="app">
      {user ? (
        <>
          {modal && <CreateModal modal={modal} handleClose={close} />}
          <Header setMore={setMore} more={more} />
          <MainBody more={more} modal={modal} open={open} close={close} />
        </>
      ) : (
        <Login error={error} />
      )}
    </div>
  );
};

export default App;
