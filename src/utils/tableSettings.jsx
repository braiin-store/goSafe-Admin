import { forwardRef } from 'react'

import {
    Edit,
    Check, Clear,
    Remove, Search,
    AddBox, SaveAlt,
    FirstPage, LastPage,
    FilterList, ViewColumn,
    ChevronLeft, ChevronRight,
    ArrowDownward, DeleteOutline,
} from '@material-ui/icons'

export const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
};

export const headerStyle = {
    color: 'black',
    fontWeight: '600',
    textTransform: 'capitalize',
    backgroundColor: '#BDBDBD33',
}

export const options = {
    headerStyle,

    pageSize: 4,
    pageSizeOptions: [4, 8, 16],

    draggable: false,
    exportButton: true,
    columnsButton: true,

    actionsColumnIndex: -1,
    toolbarButtonAlignment: 'left',
}

export default tableIcons;