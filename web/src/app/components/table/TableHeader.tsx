import { TableHead, TableRow, TableCell } from '@mui/material';
import { TableSortBy } from '../../../utils/typeDef';
import { ArrowUpwardOutlined, ArrowDownwardOutlined } from '@mui/icons-material';
import { useState } from 'react';
import styled from '@emotion/styled';

const TableSortArrow = ({ isActive, isAscending, clickHandler }: {isActive: boolean, isAscending: boolean, clickHandler: () => void}) => {
  return isAscending ? 
  <ArrowUpwardOutlined 
    onClick={clickHandler}
    fontSize='small'
    style={{color: isActive ? '#330072' : '#f5b27e'}}
  /> : 
  <ArrowDownwardOutlined 
    fontSize='small'
    onClick={clickHandler}
    style={{color: isActive ? '#330072' : '#f5b27e'}}
  />;
};

const StyledTableCellContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const TableHeader = ({sortBy, setSortBy}: {sortBy: TableSortBy, setSortBy: (sortBy: TableSortBy) => void}) => {

    // header arrow state
    const [nameArrowAsc, setNameArrowAsc] = useState<boolean>(true);
    const [emailArrowAsc, setEmailArrowAsc] = useState<boolean>(true);
    const [phoneArrowAsc, setPhoneArrowAsc] = useState<boolean>(true);
    const [dateJoinedArrowAsc, setDateJoinedArrowAsc] = useState<boolean>(false);
    const [partyArrowAsc, setPartyArrowAsc] = useState<boolean>(true);
    const [cityArrowAsc, setCityArrowAsc] = useState<boolean>(true);
    const [stateArrowAsc, setStateArrowAsc] = useState<boolean>(true);

    
  return (<TableHead>
    <TableRow>
      <TableCell>
        <StyledTableCellContents>
          Name
          <TableSortArrow
            isActive={sortBy === TableSortBy.ASC_NAME || sortBy === TableSortBy.DESC_NAME}
            isAscending={nameArrowAsc}
            clickHandler={() => {
              setSortBy(nameArrowAsc ? TableSortBy.ASC_NAME : TableSortBy.DESC_NAME);
              setNameArrowAsc(!nameArrowAsc);
            }}
          />
        </StyledTableCellContents>
      </TableCell>
      <TableCell>
        <StyledTableCellContents>
          Email
          <TableSortArrow
            isActive={sortBy === TableSortBy.ASC_EMAIL || sortBy === TableSortBy.DESC_EMAIL}
            isAscending={emailArrowAsc}
            clickHandler={() => {
              setSortBy(emailArrowAsc ? TableSortBy.ASC_EMAIL : TableSortBy.DESC_EMAIL);
              setEmailArrowAsc(!emailArrowAsc);
            }}
          />
        </StyledTableCellContents>
      </TableCell>
      <TableCell>
      <StyledTableCellContents>
          Phone
          <TableSortArrow
            isActive={sortBy === TableSortBy.ASC_PHONE || sortBy === TableSortBy.DESC_PHONE}
            isAscending={phoneArrowAsc}
            clickHandler={() => {
              setSortBy(phoneArrowAsc ? TableSortBy.ASC_PHONE : TableSortBy.DESC_PHONE);
              setPhoneArrowAsc(!phoneArrowAsc);
            }}
          />
        </StyledTableCellContents>
      </TableCell>
      <TableCell>
      <StyledTableCellContents>
          Date Joined
          <TableSortArrow
            isActive={sortBy === TableSortBy.ASC_DATE_JOINED || sortBy === TableSortBy.DESC_DATE_JOINED}
            isAscending={dateJoinedArrowAsc}
            clickHandler={() => {
              setSortBy(!dateJoinedArrowAsc ? TableSortBy.ASC_DATE_JOINED : TableSortBy.DESC_DATE_JOINED);
              setDateJoinedArrowAsc(!dateJoinedArrowAsc);
            }}
          />
        </StyledTableCellContents>
      </TableCell>
      <TableCell>
        <StyledTableCellContents>
          Party
          <TableSortArrow
            isActive={sortBy === TableSortBy.ASC_PARTY || sortBy === TableSortBy.DESC_PARTY}
            isAscending={partyArrowAsc}
            clickHandler={() => {
              setSortBy(partyArrowAsc ? TableSortBy.ASC_PARTY : TableSortBy.DESC_PARTY);
              setPartyArrowAsc(!partyArrowAsc);
            }}
          />
        </StyledTableCellContents>
      </TableCell>
      <TableCell>
        <StyledTableCellContents>
          City
          <TableSortArrow
            isActive={sortBy === TableSortBy.ASC_CITY || sortBy === TableSortBy.DESC_CITY}
            isAscending={cityArrowAsc}
            clickHandler={() => {
              setSortBy(cityArrowAsc ? TableSortBy.ASC_CITY : TableSortBy.DESC_CITY);
              setCityArrowAsc(!cityArrowAsc);
            }}
          />
        </StyledTableCellContents>
      </TableCell>
      <TableCell>
        <StyledTableCellContents>
          State
          <TableSortArrow
            isActive={sortBy === TableSortBy.ASC_STATE || sortBy === TableSortBy.DESC_STATE}
            isAscending={stateArrowAsc}
            clickHandler={() => {
              setSortBy(stateArrowAsc ? TableSortBy.ASC_STATE : TableSortBy.DESC_STATE);
              setStateArrowAsc(!stateArrowAsc);
            }}
          />
        </StyledTableCellContents>
      </TableCell>
    </TableRow>
  </TableHead>
)
}