import React, { Component } from 'react'
import api from '../api'
import { DataGrid } from '@material-ui/data-grid';
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const columns = [
  { field: 'rank', headerName: '#', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'priceUsd', headerName: 'Price USD', width: 130 },
  { field: 'changePercent24Hr', headerName: '24h', width: 90 },
  { field: 'marketCapUsd', headerName: 'Market Cap', width: 160 },
  { field: 'volumeUsd24Hr', headerName: 'Volume', width: 160 },
  { field: 'supply', headerName: 'Supply', width: 160 },

];

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
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={assets} columns={columns} pageSize={5} />
                </div>
            </Wrapper>
        )
    }
}

export default AssetsList