import formatDuration from "format-duration";

export const formatTime = (timeInSecconds = 0) =>
  formatDuration(timeInSecconds * 1000);

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
