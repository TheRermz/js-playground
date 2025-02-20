export const label = (attr) => {
  const element = document.createElement("label");
  Object.assign(element, attr);
  return element;
};

export const input = (attr) => {
  const element = document.createElement("input");
  Object.assign(element, attr);
  return element;
};

export const br = () => {
  const element = document.createElement("br");
  return element;
};
