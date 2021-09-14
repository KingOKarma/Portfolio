
async function fetchBotStats() {
    await fetch('https://api.bucketbot.dev/application/stats', {
        method: "GET"
    })
        .then(async (resp) => {
            const data = await resp.json();
            // data.servers;
            // data.members
            // data.support.members
            // data.uptime
            return Object.assign(fetchBotStats, data);
        })
        .catch((err) => {
            return {
                error: true
            };
        })
}

export default fetchBotStats();