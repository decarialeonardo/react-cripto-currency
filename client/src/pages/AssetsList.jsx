import React, { Component } from 'react'
import api from '../api'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const Wrapper = styled.div`
    padding: 0 150px 150px 150px;
`

const CoinSymbol = styled.div`
    display: inline-block;
    vertical-align: 'middle';
`
const CoinSymbolTitle = styled.p`
    font-size: 0.8em; 
    opacity: 0.7;"
`


const classes = makeStyles({
    table: {
      minWidth: 650,
    },
});
class AssetsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assets: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllAssets().then(assets => {
            this.setState({
                assets: assets.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { assets } = this.state
        console.log('TCL: AssetsList -> render -> assets', assets)

        return (
            <Wrapper>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Price USD</StyledTableCell>
                            <StyledTableCell align="right">24h</StyledTableCell>
                            <StyledTableCell align="right">Market Cap</StyledTableCell>
                            <StyledTableCell align="right">Volume</StyledTableCell>
                            <StyledTableCell align="right">Supply</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {assets.map((asset) => (
                            <StyledTableRow  key={asset.id}>
                                <StyledTableCell  style={{cursor: 'pointer'}} component="th" scope="row">
                                    <img src={`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`} class="" />
                                    <CoinSymbol>
                                        <Link to={`${asset.id}`} className="nav-link">
                                            {asset.name}
                                            <CoinSymbolTitle>{asset.symbol}</CoinSymbolTitle>
                                        </Link>
                                    </CoinSymbol>
                                </StyledTableCell>
                                <StyledTableCell align="right">${Math.round(asset.priceUsd * 100) / 100 }</StyledTableCell>
                                <StyledTableCell align="right">{asset.changePercent24Hr}</StyledTableCell>
                                <StyledTableCell align="right">{asset.marketCapUsd}</StyledTableCell>
                                <StyledTableCell align="right">{asset.volumeUsd24Hr}</StyledTableCell>
                                <StyledTableCell align="right">{asset.supply}</StyledTableCell>
                            </StyledTableRow >
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Wrapper>
        )
    }
}

export default AssetsList
