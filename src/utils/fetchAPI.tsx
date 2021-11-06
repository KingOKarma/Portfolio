import { useEffect, useState } from "react";

// type dataTypes = "Servers" | "Members" | "SupMembers" | "Uptime";

export default function FetchAPI(api: string) {
    const [data, setData] = useState([]);

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
