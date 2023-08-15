// App.css 파일을 import합니다.
import './App.css';

// react-router-dom에서 필요한 모듈들을 import합니다.
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// MainPage 컴포넌트를 import합니다.
import MainPage from "./pages/main/MainPage";

// @emotion/styled 를 import합니다.
import styled from '@emotion/styled';

// 라우터를 생성합니다.
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />, // 루트 경로 ("/")에 MainPage 컴포넌트를 매칭합니다.
  },
]);

// App 컴포넌트를 정의합니다.
function App() {
  return (
    // 스타일링을 적용한 Container를 사용하여 컨테이너를 렌더링합니다.
    <S.Container>
      <RouterProvider router={router} /> {/* 라우터 프로바이더로 라우터를 제공합니다. */}
    </S.Container>
  );
};

// @emotion/styled를 사용하여 스타일을 정의합니다.
const S = {
  Container: styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    label: App__Container;
  `,
};

export default App; // App 컴포넌트를 내보냅니다.
