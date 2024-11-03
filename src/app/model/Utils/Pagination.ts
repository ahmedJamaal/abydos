export class Paging {
  page: number;
  size!: number;

  constructor() {
    this.page = 1;
    this.size = 8;
  }

  public get _page(): number {
    return this.page - 1;
  }
  public set _size(size: number) {
    this.size = size;
  }
}

export class paging_$Searching {
  page: number;
  size!: number;
  name!: String;
  constructor() {
    this.page = 1;
    this.size = 8;
    this.name = '';
  }
  public get _page(): number {
    return this.page - 1;
  }

  public set _size(size: number) {
    this.size = size;
  }
}

export class TableTitle {
  title: string = '';
}
