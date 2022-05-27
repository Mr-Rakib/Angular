export interface GenericTableConfig{
    Data : any
    Column: TableColumnConfig[]
}

export interface TableColumnConfig{
    ColumnName : string
    ColumnType : string 
}