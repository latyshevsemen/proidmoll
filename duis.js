const ColumnType = {
    ColTitle: 'ColTitle',
    ColAuthor: 'ColAuthor',
    ColYear: 'ColYear'
};

function handleColumn(column) {
    switch (column) {
        case ColumnType.ColTitle:
            console.log("Handling title column");
            break;
        case ColumnType.ColAuthor:
            console.log("Handling author column");
            break;
        case ColumnType.ColYear:
            console.log("Handling year column");
            break;
        default:
            console.log("Unknown column type");
            break;
    }
}

handleColumn(ColumnType.ColTitle);
handleColumn(ColumnType.ColAuthor);
handleColumn(ColumnType.ColYear);
handleColumn('UnknownColumn');
