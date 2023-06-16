import { ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { Box, Link, Paper, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import Router from 'next/router';
import React from 'react';

interface Props {
  data: {
    title: string;
    description: string;
    table: {
      item: string;
      value: string;
      link: string;
    }[];
  }
}

function InfoCard({ data }: Props) {
  const handleClick = (link: string) => {
    try {
      Router.push(link);
    } catch(err){
      console.error("Not Exist Page")
    }
  }

  return (
    <Paper sx={{minWidth: 723, maxWidth: 1023}}>
      <Box sx={{minWidth:680, pt: 3, px: 2, pb: 1}}>
        <Typography variant="h5">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{pt: 1}}>
          <span>
            {data.description.split('\n').map((t, index)=> (<span key={index}>{t}<br /></span>))}
          </span>
        </Typography>
      </Box>
      <Table>
        <TableBody>
          {data.table.map((row) => (
            <TableRow
              hover
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
              onClick={() => handleClick(row.link)}
              key={row.item}
            >
              <TableCell align="left" style={{width: 260}} sx={{color: "text.secondary"}}>{row.item}</TableCell>
              <TableCell align="left" sx={{color: "text.secondary"}} >{row.value}</TableCell>
              <TableCell align="right" sx={{color: "text.secondary"}} >
                <Link href={row.link} color="inherit" underline="none" ><ChevronRightIcon/></Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}


export default InfoCard;
