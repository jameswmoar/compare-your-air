export const timeConverter = (milliseconds) => {
    const timeBrackets = [
        { seconds: 31536000, detail: "YEAR" },
        { seconds: 2592000, detail: "MONTH" },
        { seconds: 604800, detail: "WEEK" },
        { seconds: 86400, detail: "DAY" },
        { seconds: 3600, detail: "HOUR" },
        { seconds: 60, detail: "MINUTE" },
        { seconds: 0, detail: "SECOND" },
    ];

    const seconds = Math.floor(milliseconds / 1000);
    const timeBracket = timeBrackets.find(bracket => bracket.seconds < seconds);
    const elapsed = Math.floor(seconds / timeBracket.seconds);
    return `${elapsed} ${timeBracket.detail}${elapsed === 1 ? "" : "S"} AGO`;
}