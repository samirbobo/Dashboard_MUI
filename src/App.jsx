import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/RootLayout";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import CreateUser from "./pages/CreateUser";
import Calendar from "./pages/Calendar";
import Faq from "./pages/Faq";
import BarChart from "./pages/BarChart";
import PieChart from "./pages/PieChart";
import LineChart from "./pages/LineChart";
import Geography from "./pages/Geography";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<CreateUser />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
