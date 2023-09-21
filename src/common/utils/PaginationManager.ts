import paginatedDataList from '../interface/paginatedDataList';

export default class PaginationManager {
  static pageDetermination(
    page: number,
    size: number,
  ): { limit: number; offset: number } {
    const limit = size ? +size : 10;
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
  }

  static paginatedData<entity extends object>(
    data: { rows: entity[]; count: number },
    page: number,
    limit: number,
  ): paginatedDataList {
    const currentPage = page ? page : 1;
    let { count: totalItems, rows: list } = data;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, totalPages, list, currentPage };
  }
}
