import { useEffect } from "react";

export const Loading = (loadedText: string, setLoadedText: React.Dispatch<React.SetStateAction<string>>, isLoading: boolean) => {    
    useEffect(() => {
        console.log(loadedText);
        const interval = setTimeout(() => {
          switch (loadedText) {
            case "Loading":
              return setLoadedText("Loading.")
            case "Loading.":
              return setLoadedText("Loading..");
            case "Loading..":
              return setLoadedText("Loading...");
            case "Loading...":
              return setLoadedText("Loading");
          }
        }, 250)
        if (!isLoading) clearInterval(interval);
      }, [isLoading, loadedText, setLoadedText])
    
}
