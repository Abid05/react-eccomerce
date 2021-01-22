const removeAction = (id) => ({
  type: "REMOVE_CAT",
  payload: {
    id: id,
  },
});
export default removeAction;
