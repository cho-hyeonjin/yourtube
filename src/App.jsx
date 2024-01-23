import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "react-query";
import { YourtubeApiProvider } from "./context/YourtubeApiContext";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YourtubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Outlet />
        </QueryClientProvider>
      </YourtubeApiProvider>
    </>
  );
}

export default App;
