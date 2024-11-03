export class Sorting{
  property!:	string;
  sortOrder!:	number;
  sortIcon!:	string;
  dataTableData!:	any [];

 constructor(){
  this.sortOrder=1;
  this.property = '';
  this.sortIcon = '';
  this.sortIcon = '';
  this.dataTableData = [];
 }
 public set _dataTableData(dataTable:any)  {
  this.dataTableData=dataTable;
 }
 public get _sortOrder() : number {
  return this.sortOrder;
 }
 public set _sortOrder(sortOrder:number)  {
  this.sortOrder=sortOrder;
 }

 public get _property() : string {
  return this.property ;
 }
 public set _property(property:string)  {
   this.property=property;
  }
  public _sortIcon(property: string) : string {
    if (property === this.property) {
      return this.sortOrder === 1 ? '☝️' : '👇';
    }
    return '';
  }

	public SortDataTableByColumn(property: string) :any [] {
    return [...this.dataTableData.sort((a: any, b: any) => {
      let result = 0;
      if (a[property] < b[property]) {
        result = -1;
      }
      if (a[property] > b[property]) {
        result = 1;
      }
      return result * this.sortOrder;
    })];
	}

	public Searching(searchInput:string) :any [] {
    return this.dataTableData.filter((val) =>
    val.name.toLowerCase().includes(searchInput)
  );
	}
}
