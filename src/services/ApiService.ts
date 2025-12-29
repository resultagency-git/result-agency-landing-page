import { AxiosResponse } from "axios";
import generalApi from ".";

export type ModelOptions =
  | "employee"
  | "position"
  | "customer"
  | "appointment"
  | "budget";

export type RetrieveOptions = {
  model: ModelOptions;
  filter?: any;
  many?: boolean;
  mode?: boolean;
  sort?: any;
};

export type CreateOptions = {
  model: ModelOptions;
  data: any;
  auth?: boolean;
};

export type UpdateOptions = {
  model: ModelOptions;
  data: any;
  params: any;
};

export type DeleteOptions = {
  model: ModelOptions;
  params: any;
};

export type ArchiveOptions = {
  model: ModelOptions;
  params: any;
};

export default class ApiService {
  async retrieve({
    model,
    filter,
    many,
    mode,
    sort,
  }: RetrieveOptions): Promise<AxiosResponse> {
    return await generalApi.post(`/${model}/retrieve`, {
      filter: filter ?? {},
      many: many ?? false,
      mode: mode ?? null,
      sort: sort ?? null,
    });
  }
  async create({ model, data, auth }: CreateOptions): Promise<AxiosResponse> {
    return await generalApi.post(
      `/${model}/${auth ? "/auth/" : ""}create`,
      data
    );
  }
  async update({ model, data, params }: UpdateOptions): Promise<AxiosResponse> {
    return await generalApi.patch(`/${model}/update`, data, {
      params,
    });
  }
  async archive({ model, params }: ArchiveOptions): Promise<AxiosResponse> {
    return await generalApi.post(
      `/${model}/archive`,
      {},
      {
        params,
      }
    );
  }
  async delete({ model, params }: DeleteOptions): Promise<AxiosResponse> {
    return await generalApi.post(
      `/${model}/delete`,
      {},
      {
        params,
      }
    );
  }
}
