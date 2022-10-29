import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import HeaderWithBackBtn from 'components/Header/HeaderWithBackBtn'

const rows = [
  { name: 'sadfasdf', surname: 'asdfadsf', points: 12 },
  { name: 'sadfasdf', surname: 'asdfadsf', points: 12 },
  { name: 'sadfasdf', surname: 'asdfadsf', points: 12 },
  { name: 'sadfasdf', surname: 'asdfadsf', points: 12 },
]
export default function TestStatistics() {
  return (
    <>
      <HeaderWithBackBtn title="Статистика" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell align="right">Фамилия</TableCell>
              <TableCell align="right">Количество баллов</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.surname}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
