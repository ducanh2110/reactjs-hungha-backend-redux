const noOp = () => ({ type: "NO_OP" });

export const apiPayloadCreator = ({
  url = "/",
  method = "GET",
  onSuccess = noOp,
  onFailure = noOp,
  label = ""
}) => ({
  url,
  method,
  onSuccess,
  onFailure,
  label
});
