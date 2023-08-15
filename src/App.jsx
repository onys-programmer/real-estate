import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import styled from '@emotion/styled';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return (
    <S.Container>
      <RouterProvider router={router} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    label: App__Container;
  `,
};

export default App;
