import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableRow, TablePagination } from '@mui/material';
import { Constituent, TableSortBy } from '../../../typeDefs/typeDef';
import styled from '@emotion/styled';
import { getSortedConstituentsForTable } from '../../utils';
import { TableHeader } from './TableHeader';

// Table pagination select component throws warning about using the native select element
// This is a known issue with MUI
// https://stackoverflow.com/questions/76491601/accessibility-issues-coming-in-mui-components

const StyledTable = styled(Table)`
  max-width: 1000px;
`

const StyledTableCell = styled(TableCell)`
  max-width: 180px;
  overflow: scroll;
`

export const ConstituentTable = ({ constituents }: { constituents: Constituent[] }) => {

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<TableSortBy>(TableSortBy.DESC_DATE_JOINED);
  const [sortedConstituents, setSortedConstituents] = useState<Constituent[]>(constituents);

  useEffect(() => {
    setSortedConstituents(getSortedConstituentsForTable(sortBy, constituents));
  }, [sortBy, constituents]);


  const rows = sortedConstituents.map((constituent) => {
    return (
      <TableRow key={constituent.id}>
        <TableCell>{constituent.name}</TableCell>
        <StyledTableCell>{constituent.email}</StyledTableCell>
        <TableCell>{constituent.phone}</TableCell>
        <TableCell>{constituent.date_joined ? new Date(constituent.date_joined).toLocaleDateString() : ''}</TableCell>
        <TableCell>{constituent.party}</TableCell>
        <TableCell>{constituent.city}</TableCell>
        <TableCell>{constituent.state}</TableCell>
      </TableRow>
    )
  });

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <StyledTable>
        <TableHeader
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)}
        </TableBody>
      </StyledTable>
      <TablePagination 
        component='div'
        count={constituents.length}
        page={page}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        showFirstButton
        showLastButton
      />
    </div>
  )
}