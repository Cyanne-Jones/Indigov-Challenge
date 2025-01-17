import { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { CSVSortBy } from '../../utils/typeDef';
import { ArrowUpwardOutlined, ArrowDownwardOutlined } from '@mui/icons-material';

export const DownloadCsvMenu = ({ handleDownloadSelection } : { handleDownloadSelection: (csvSort: CSVSortBy) => void } ) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
      return;
    }
    setAnchorEl(event.currentTarget);
  };

  const handleDownloadClick = (csvSort: CSVSortBy) => {
    setAnchorEl(null);
    handleDownloadSelection(csvSort);
  }

  return (
    <div>
      <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        variant={anchorEl ? 'outlined' : 'contained'}
        endIcon={anchorEl ? <ArrowUpwardOutlined /> : <ArrowDownwardOutlined />}
      >
        Download CSV
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleDownloadClick(CSVSortBy.NAME)}>Sort by Name</MenuItem>
        <MenuItem onClick={() => handleDownloadClick(CSVSortBy.EMAIL)}>Sort by Email</MenuItem>
        <MenuItem onClick={() => handleDownloadClick(CSVSortBy.PHONE)}>Sort by Phone</MenuItem>
        <MenuItem onClick={() => handleDownloadClick(CSVSortBy.DATE_JOINED)}>Sort by Date Joined</MenuItem>
        <MenuItem onClick={() => handleDownloadClick(CSVSortBy.PARTY)}>Sort by Party</MenuItem>
        <MenuItem onClick={() => handleDownloadClick(CSVSortBy.CITY)}>Sort by City</MenuItem>
        <MenuItem onClick={() => handleDownloadClick(CSVSortBy.STATE)}>Sort by State</MenuItem>
      </Menu>
    </div>
  );

}