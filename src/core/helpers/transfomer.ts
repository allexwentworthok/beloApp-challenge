export function transformer(data: any) {
  let objArray: {key: number; name: string; price: any}[] = [];
  Object.keys(data).forEach(key =>
    objArray.push({
      key: Math.random(),
      name: key,
      price: data[key],
    }),
  );
  return objArray;
}
