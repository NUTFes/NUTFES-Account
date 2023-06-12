import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

interface Props {
  title: string;
  description: string;
  table: {
    item: string;
    value: string;
    link: string;
  }[];
}

function InfoCard(props: Props) {
  return (
    <Card sx={{minWidth:723, maxWidth: 1023}}>
      <CardContent>
        <Typography variant="h5">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Table sx={{minWidth: 680}}>
          <TableBody>
            {props.table.map((row) => (
              <TableRow
                key={row.item}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" style={{ width: 260}}>{row.item}</TableCell>
                <TableCell align="left">{row.value}</TableCell>
                <TableCell align="right">
                  <Link href={row.link} color="inherit" underline="none" >＞</Link>
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
