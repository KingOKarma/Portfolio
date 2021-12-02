import { useEffect, useState } from "react";

// type dataTypes = "Servers" | "Members" | "SupMembers" | "Uptime";

export default function FetchAPI(api: string) {
    const [data, setData] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {

        fetch(api)
            .then((response) => response.json())
            .then(data => setData(data))

            .catch((err) => {
                return {
                    error: true
                };
            })
    }, [api])
 const returnData: any = data;
    return returnData;
}
