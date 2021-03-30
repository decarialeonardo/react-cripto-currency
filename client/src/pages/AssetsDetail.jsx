import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../api'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class AssetsDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            asset: {},
            history: [],
            candles: [],
            id: this.props.match.params.id,
        }
    }

    componentDidMount = async () => {
        const { id } = this.state
        const asset = await api.getAssetById(id)
        const history = await api.getAssetHistory(id, 'd1')
        const candles = await api.getCandles(id, 'h8', 'ethereum', 'bitcoin')
        this.setState({
            asset: asset.data,
            history: history.data,
            candles: candles.data
        })
    }

    render() {
        const { asset, history, candles } = this.state
        console.log('TCL: Detail -> render -> assets', asset)
        console.log('TCL: Detail -> render -> history', history)
        console.log('TCL: Detail -> render -> candles', candles)

        return (
            <Wrapper>
                 Hola        
            </Wrapper>
        )
    }
}

export default AssetsDetail
