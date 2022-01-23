export const dateToString = (timestamp: number | Date, isTime = false): string => {
    const date = new Date(timestamp);
  
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const formatDate = `${date.getFullYear()}-${month}-${day}`;
    return isTime ? `${formatDate}, ${date.toLocaleTimeString([], {hour: '2-digit', minute: "2-digit", second: "2-digit", hour12: true})}` : formatDate;
  };