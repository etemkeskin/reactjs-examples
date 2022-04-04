import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import ImageGallery from "./pages/ImageGallery";
import Home from "./pages/Home";
import ModalPage from "./pages/ModalPage";
import KanbanBoard from "./pages/KanbanBoard";
import ReactTable from "./pages/ReactTable";
import LoadMorePagination from "./pages/LoadMorePagination";
import ImageGallery2 from "./pages/ImageGallery2";
import BootstrapExamples from "./pages/BootstrapExamples";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="image-gallery" element={<ImageGallery />}></Route>
          <Route path="modal" element={<ModalPage />}></Route>
          <Route path="kanban-board" element={<KanbanBoard />}></Route>
          <Route path="react-table" element={<ReactTable />}></Route>
          <Route path="load-more-pagination" element={<LoadMorePagination />}></Route>
          <Route path="image-gallery-2" element={<ImageGallery2 />}></Route>
          <Route path="bootstrap-examples" element={<BootstrapExamples />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
