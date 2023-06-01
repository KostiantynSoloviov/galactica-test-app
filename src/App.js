import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from "./page/MainPage/MainPage";
import HomePage from "./page/HomePage/HomePage"
import CoursesPage from "./page/CoursesPage/CoursesPage"
import LibrariesPage from "./page/LibrariesPage/LibrariesPage"
import StatisticsPage from "./page/StatisticsPage/StatisticsPage"
import UsersGuidelinePage from "./page/UsersGuidelinePage/UsersGuidelinePage"

import { fetchUserData } from './redux/slices/userSlice';

import './App.css';


const App = () => {
  const { status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (status === "loading") {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="libraries" element={<LibrariesPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="guideline" element={<UsersGuidelinePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
