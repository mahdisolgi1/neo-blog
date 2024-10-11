import "./App.css";
import {useGetArticles} from "@/services/generated/article/article";

function App() {
    const {data, isLoading, error, mutate} = useGetArticles();
    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {JSON.stringify(error?.response?.data || {})}</div>}
            {data && <div>{JSON.stringify(data?.data)}</div>}


            <button onClick={() => mutate()}>Reload Articles</button>
        </div>
    );
}

export default App;
