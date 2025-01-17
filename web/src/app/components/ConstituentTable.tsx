import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@mui/material';
import { Constituent } from '../../typeDefs/typeDef';
import styled from '@emotion/styled';

// Table pagination select component throws warning about using the native select element
// This is a known issue with MUI
// https://stackoverflow.com/questions/76491601/accessibility-issues-coming-in-mui-components

const StyledTable = styled(Table)`
  width: 1000px;
`

export const ConstituentTable = ({ constituents }: { constituents: Constituent[] }) => {

  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const rows = constituents.map((constituent) => {
    return (
      <TableRow key={constituent.id}>
        <TableCell>{constituent.name}</TableCell>
        <TableCell>{constituent.email}</TableCell>
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
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Date Joined</TableCell>
            <TableCell>Party</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
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