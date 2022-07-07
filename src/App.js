import logo from "./logo.svg";
import "./App.css";
import Home from "pages";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 1000 * 60 * 7,
      enabled: false,
      staleTime: Infinity,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ToastContainer closeButton={false} />
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
