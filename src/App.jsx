import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Details from "./Pages/Details";

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </>;
}
