type UnionToArray<T> =
  PickOne<T> extends infer U
    ? Exclude<T, U> extends never
      ? [T]
      : [...UnionToArray<Exclude<T, U>>, U]
    : never
