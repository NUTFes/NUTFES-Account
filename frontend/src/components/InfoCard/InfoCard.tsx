import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";

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
  return (
    <Card sx={{minWidth:723, maxWidth: 1023}}>
      <CardContent>
        <Typography variant="h5">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Table sx={{minWidth: 680}}>
          <TableBody>
            {data.table.map((row) => (
              <TableRow
                hover
                key={row.item}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" style={{ width: 260}}>{row.item}</TableCell>
                <TableCell align="left">{row.value}</TableCell>
                <TableCell align="right">
                  <Link href={row.link} color="inherit" underline="none" ><KeyboardArrowRightIcon/></Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}


export default InfoCard;
