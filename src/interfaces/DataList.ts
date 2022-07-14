export default interface IDataList<T> {
  id?: number;
  page?: number;
  results?: Array<T>;
  total_results?: number;
  total_pages?: number;
}
