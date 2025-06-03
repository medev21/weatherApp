// COMPONENTS
import App from 'src/App'
// DEPENDENCIES
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// STYLES
import 'src/style/universal.scss';
import 'src/style/app.scss';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		}
	}
})

createRoot(document.getElementById("weatherapp")!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</StrictMode>,
)
