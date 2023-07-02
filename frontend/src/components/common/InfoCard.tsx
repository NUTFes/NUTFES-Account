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

import { LinkTable } from "@/type/common";

export interface InfoCardProps {
  title: string;
  description?: string;
  table: LinkTable[];
}

const InfoCard = ({ title, description, table }: InfoCardProps) => {
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
          {title}
        </Typography>
        {description ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pt: 1, whiteSpace: "pre-wrap" }}
            className="text"
          >
            {description}
          </Typography>
        ) : null}
      </Box>
      <Table>
        <TableBody>
          {table.map((row) => (
            <TableRow
              hover
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => handleClick(row.href)}
              key={row.key}
            >
              <TableCell align="left" sx={{ width: 156 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontSize: 12 }}
                >
                  {row.name}
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
