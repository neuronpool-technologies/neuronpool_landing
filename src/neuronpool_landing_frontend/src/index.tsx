import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "@/components/ui/provider";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found");
}
