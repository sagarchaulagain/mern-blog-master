export function getToken() {
  return {
    headers: {
      crossdomain: true,
      authorization:
        "Bearer " +authorization
        (sessionStorage.getItem("user") &&
          JSON.parse(sessionStorage.getItem("user")).token),
    },
  };
}
