export function getUrlId(): string {
  const lastIndex = window.location.href.split('/').length - 1;
  const id = window.location.href.split('/')[lastIndex];

  return id;
}