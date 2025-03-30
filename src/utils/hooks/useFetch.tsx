import { useEffect, useReducer, useMemo, useRef } from "react";
import getData from "../getData";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true, error: null };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function useFetch(url, options = {}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Memoize the options object to avoid unnecessary effect re-runs
  const memoizedOptions = useMemo(() => options, [JSON.stringify(options)]);

  // Store the abort controller in a ref to persist across renders
  const abortControllerRef = useRef(new AbortController());

  useEffect(() => {
    // Create a new abort controller for each new request
    abortControllerRef.current = new AbortController();

    const fetchData = async () => {
      dispatch({ type: "loading" });
      try {
        const data = await getData(url, {
          ...memoizedOptions,
          signal: abortControllerRef.current.signal,
        });
        dispatch({ type: "success", payload: data });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          dispatch({ type: "error", payload: error });
        }
      }
    };

    fetchData();

    // Cleanup function will abort the request if component unmounts
    return () => {
      abortControllerRef.current.abort();
    };
  }, [url, memoizedOptions]);

  return state;
}
