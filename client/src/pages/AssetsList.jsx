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
import { numberToMillions } from '../utils';
  

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


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

    handleCellClick(assetId) {
        this.props.history.push(assetId);
    }

    render() {
        const { assets } = this.state
        console.log('TCL: AssetsList -> render -> assets', assets)

        assets.map( asset => {
            asset.priceUsd = (Math.round(asset.priceUsd * 100) / 100).toLocaleString("en-US");
            asset.marketCapUsd = numberToMillions(asset.marketCapUsd).toLocaleString("en-US");
            asset.vwap24Hr = (Math.round(asset.vwap24Hr * 100) / 100).toLocaleString("en-US");
            asset.supply = (numberToMillions(asset.supply)).toLocaleString("en-US");
            asset.volumeUsd24Hr = (numberToMillions(asset.volumeUsd24Hr)).toLocaleString("en-US");
            asset.changePercent24Hr = Math.round(asset.changePercent24Hr * 100) / 100;

            return asset;
        });

        return (
            <Wrapper>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Rank</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Price</StyledTableCell>
                            <StyledTableCell align="right">Market Cap</StyledTableCell>
                            <StyledTableCell align="right">VWAP (24Hr)</StyledTableCell>
                            <StyledTableCell align="right">Supply</StyledTableCell>
                            <StyledTableCell align="right">Volume (24Hr)</StyledTableCell>
                            <StyledTableCell align="right">Change (24Hr)</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {assets.map((asset) => (
                            <TableRow hover key={asset.id} style={{cursor: 'pointer'}} onClick={() => this.handleCellClick(asset.id)}>
                                <StyledTableCell>{asset.rank}</StyledTableCell>
                                <StyledTableCell>
                                    <img src={`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`} />
                                    <CoinSymbol>
                                        <Link to={`${asset.id}`} className="nav-link">
                                            {asset.name}
                                            <CoinSymbolTitle>{asset.symbol}</CoinSymbolTitle>
                                        </Link>
                                    </CoinSymbol>
                                </StyledTableCell>
                                <StyledTableCell align="right">${asset.priceUsd}</StyledTableCell>
                                <StyledTableCell align="right">${asset.marketCapUsd}</StyledTableCell>
                                <StyledTableCell align="right">${asset.vwap24Hr}</StyledTableCell>
                                <StyledTableCell align="right">{asset.supply}</StyledTableCell>
                                <StyledTableCell align="right">${asset.volumeUsd24Hr}</StyledTableCell>
                                <StyledTableCell align="right" style={ asset.changePercent24Hr >= 0 ? { color:'green' } : {color: 'red'}}>{asset.changePercent24Hr}%</StyledTableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Wrapper>
        )
    }
}

export default AssetsList
