import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
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
  };
}

const InfoCard = ({ data }: Props) => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };

  return (
    <Paper
      variant="outlined"
      sx={{ maxWidth: 840, borderRadius: 2, mt: 3, mx: 1.5 }}
    >
      <Box sx={{ pt: 3, px: 2, pb: 1 }}>
        <Typography variant="h2" sx={{ fontSize: 22 }}>
          {data.title}
        </Typography>
        {data.description ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pt: 1, whiteSpace: "pre-wrap" }}
            className="text"
          >
            {data.description}
          </Typography>
        ) : null}
      </Box>
      <Table>
        <TableBody>
          {data.table.map((row) => (
            <TableRow
              hover
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => handleClick(row.link)}
              key={row.item}
            >
              <TableCell align="left" sx={{ width: 156 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontSize: 12 }}
                >
                  {row.item}
                </Typography>
                {row.value ? (
                  <Typography
                    variant="body1"
                    className="text"
                    sx={{
                      mt: 1,
                      display: { xs: "block", sm: "none" },
                      color: "text.primary",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {row.value}
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    className="text"
                    sx={{
                      mt: 1,
                      display: { xs: "block", sm: "none" },
                      color: "text.secondary",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    未設定
                  </Typography>
                )}
              </TableCell>
              <TableCell align="left">
                {row.value ? (
                  <Typography
                    variant="body1"
                    className="text"
                    sx={{
                      color: "text.primary",
                      whiteSpace: "pre-wrap",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    {row.value}
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    className="text"
                    sx={{
                      color: "text.secondary",
                      whiteSpace: "pre-wrap",
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    未設定
                  </Typography>
                )}
              </TableCell>
              <TableCell align="right">
                <ChevronRight />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default InfoCard;
