const noOp = () => ({ type: "NO_OP" });

export const apiPayloadCreator = ({
  url = "/",
  method = "GET",
  onSuccess = noOp,
  onFailure = noOp,
  label = "",
    data = "",
    params = "",
    headers = {}
}) => ({
  url,
  method,
  onSuccess,
  onFailure,
  label,
    data,
    params,
    headers
});
