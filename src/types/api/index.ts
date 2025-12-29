export type Request<T> = {
  fields?: keyof T;
  filters?: T;
  relations?: keyof T;
  pagination?: RequestPagination;
  orderBy?: RequestOrderBy<T>;
};

export type RequestPagination = {
  perPage: number;
  page: number;
  total: number;
};

export type RequestOrderBy<T> = {
  columns: keyof T;
  direction: "ASC" | "DESC";
};

export type RequestResponse<T> = {
  error: boolean;
  data?: T;
  message: string;
};
